import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./signInStyles.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function SignInPage() {
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState("signin")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        phone: "",
        rememberMe: false
    })
    const [error, setError] = useState("")

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSignIn = (e) => {
        e.preventDefault()
        // Here you would typically validate credentials with your backend
        if (!formData.email || !formData.password) {
            setError("Please fill in all fields")
            return
        }
        // For demo purposes, we'll just redirect
        navigate("/")
    }

    const handleRegister = (e) => {
        e.preventDefault()
        if (!formData.email || !formData.password || !formData.confirmPassword || 
            !formData.firstName || !formData.lastName || !formData.phone) {
            setError("Please fill in all fields")
            return
        }
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match")
            return
        }
        // For demo purposes, we'll just redirect
        navigate("/")
    }

    const handleForgotPassword = (e) => {
        e.preventDefault()
        if (!formData.email) {
            setError("Please enter your email")
            return
        }
        // For demo purposes, we'll just show an alert
        alert("Password reset instructions have been sent to your email")
        setActiveTab("signin")
    }

    return (
        <>
            <Navbar />
            <div className="signin-page">
                <div className="signin-container">
                    <div className="signin-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'signin' ? 'active' : ''}`}
                            onClick={() => setActiveTab('signin')}
                        >
                            Sign In
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'register' ? 'active' : ''}`}
                            onClick={() => setActiveTab('register')}
                        >
                            Create Account
                        </button>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    {activeTab === 'signin' && (
                        <form onSubmit={handleSignIn} className="signin-form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter your password"
                                />
                            </div>
                            <div className="form-options">
                                <label className="remember-me">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleInputChange}
                                    />
                                    Remember me
                                </label>
                                <button 
                                    type="button" 
                                    className="forgot-password"
                                    onClick={() => setActiveTab('forgot')}
                                >
                                    Forgot Password?
                                </button>
                            </div>
                            <button type="submit" className="submit-btn">Sign In</button>
                            <div className="social-signin">
                                <p>Or sign in with</p>
                                <div className="social-buttons">
                                    <button type="button" className="social-btn google">
                                        <i className="fab fa-google"></i>
                                        Google
                                    </button>
                                    <button type="button" className="social-btn facebook">
                                        <i className="fab fa-facebook-f"></i>
                                        Facebook
                                    </button>
                                </div>
                            </div>
                        </form>
                    )}

                    {activeTab === 'register' && (
                        <form onSubmit={handleRegister} className="register-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your first name"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        placeholder="Enter your last name"
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="registerEmail">Email</label>
                                <input
                                    type="email"
                                    id="registerEmail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="registerPassword">Password</label>
                                <input
                                    type="password"
                                    id="registerPassword"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Create a password"
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm your password"
                                />
                            </div>
                            <button type="submit" className="submit-btn">Create Account</button>
                        </form>
                    )}

                    {activeTab === 'forgot' && (
                        <form onSubmit={handleForgotPassword} className="forgot-form">
                            <h2>Reset Password</h2>
                            <p>Enter your email address and we'll send you instructions to reset your password.</p>
                            <div className="form-group">
                                <label htmlFor="resetEmail">Email</label>
                                <input
                                    type="email"
                                    id="resetEmail"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                />
                            </div>
                            <button type="submit" className="submit-btn">Send Reset Link</button>
                            <button 
                                type="button" 
                                className="back-to-signin"
                                onClick={() => setActiveTab('signin')}
                            >
                                Back to Sign In
                            </button>
                        </form>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
} 