const router = require('express').Router()
const jwt = require('jsonwebtoken')
const User = require('../models/User')
const auth = require('../middleware/auth')
const crypto = require('crypto')

// Register
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password, phone } = req.body

        // Check if user already exists
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' })
        }

        // Create new user
        const user = new User({
            firstName,
            lastName,
            email,
            password,
            phone
        })

        await user.save()

        // Create token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1d' }
        )

        res.status(201).json({
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        // Validate
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ message: 'User does not exist' })
        }

        const isMatch = await user.comparePassword(password)
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' })
        }

        // Create token
        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET || 'your-secret-key',
            { expiresIn: '1d' }
        )

        res.json({
            token,
            user: {
                id: user._id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone
            }
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Forgot Password
router.post('/forgot-password', async (req, res) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(20).toString('hex')
        user.resetPasswordToken = resetToken
        user.resetPasswordExpires = Date.now() + 3600000 // 1 hour
        await user.save()

        // In a real application, you would send an email here
        res.json({ 
            message: 'Password reset instructions sent to email',
            resetToken // In production, don't send this to frontend
        })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Reset Password
router.post('/reset-password', async (req, res) => {
    try {
        const { token, newPassword } = req.body

        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        })

        if (!user) {
            return res.status(400).json({ message: 'Invalid or expired reset token' })
        }

        user.password = newPassword
        user.resetPasswordToken = undefined
        user.resetPasswordExpires = undefined
        await user.save()

        res.json({ message: 'Password has been reset' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Verify Token
router.post('/verify-token', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router 