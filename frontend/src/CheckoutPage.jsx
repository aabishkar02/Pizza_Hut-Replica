import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./checkoutStyles.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function CheckoutPage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
        paymentMethod: "credit",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
    })

    const [deliveryOption, setDeliveryOption] = useState("delivery")
    const [promoCode, setPromoCode] = useState("")
    const [appliedPromo, setAppliedPromo] = useState(null)
    const [promoError, setPromoError] = useState("")

    // Sample promo codes - in a real app, these would come from a backend
    const availablePromoCodes = {
        "WELCOME20": { discount: 0.20, description: "20% off your order" },
        "PIZZA10": { discount: 0.10, description: "10% off your order" },
        "FREEWINGS": { discount: 5.99, description: "Free wings with your order" },
        "SPECIAL25": { discount: 0.25, description: "25% off your order" },
        "STUDENT": { discount: 0.15, description: "15% Student discount" }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handlePromoSubmit = (e) => {
        e.preventDefault()
        const code = promoCode.toUpperCase()
        
        if (availablePromoCodes[code]) {
            setAppliedPromo({
                code,
                ...availablePromoCodes[code]
            })
            setPromoError("")
        } else {
            setPromoError("Invalid promo code")
            setAppliedPromo(null)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Here you would typically process the payment
        alert("Order placed successfully!")
        navigate("/")
    }

    // Sample order details - in a real app, these would come from your cart state
    const orderDetails = {
        subtotal: 24.97,
        deliveryFee: 3.99,
        tax: 2.32
    }

    // Calculate discount
    const calculateDiscount = () => {
        if (!appliedPromo) return 0
        
        if (typeof appliedPromo.discount === 'number') {
            if (appliedPromo.discount < 1) {
                // Percentage discount
                return orderDetails.subtotal * appliedPromo.discount
            } else {
                // Fixed amount discount
                return appliedPromo.discount
            }
        }
        return 0
    }

    const discount = calculateDiscount()
    const total = orderDetails.subtotal + orderDetails.deliveryFee + orderDetails.tax - discount

    return (
        <>
            <Navbar />
            <div className="checkout-page">
                <div className="checkout-container">
                    <h1>Checkout</h1>
                    
                    <div className="delivery-options">
                        <h2>Delivery Options</h2>
                        <div className="option-buttons">
                            <button 
                                className={`option-btn ${deliveryOption === 'delivery' ? 'active' : ''}`}
                                onClick={() => setDeliveryOption('delivery')}
                            >
                                Delivery
                            </button>
                            <button 
                                className={`option-btn ${deliveryOption === 'pickup' ? 'active' : ''}`}
                                onClick={() => setDeliveryOption('pickup')}
                            >
                                Pickup
                            </button>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="checkout-form">
                        <div className="form-section">
                            <h2>Contact Information</h2>
                            <div className="form-grid">
                                <div className="form-group">
                                    <label htmlFor="firstName">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        required
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
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                            </div>
                        </div>

                        {deliveryOption === 'delivery' && (
                            <div className="form-section">
                                <h2>Delivery Address</h2>
                                <div className="form-grid">
                                    <div className="form-group full-width">
                                        <label htmlFor="address">Street Address</label>
                                        <input
                                            type="text"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="city">City</label>
                                        <input
                                            type="text"
                                            id="city"
                                            name="city"
                                            value={formData.city}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="state">State</label>
                                        <input
                                            type="text"
                                            id="state"
                                            name="state"
                                            value={formData.state}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="zipCode">ZIP Code</label>
                                        <input
                                            type="text"
                                            id="zipCode"
                                            name="zipCode"
                                            value={formData.zipCode}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="form-section">
                            <h2>Payment Method</h2>
                            <div className="payment-methods">
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="credit"
                                        name="paymentMethod"
                                        value="credit"
                                        checked={formData.paymentMethod === 'credit'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="credit">
                                        <span className="payment-icon">💳</span>
                                        Credit Card
                                    </label>
                                </div>
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="debit"
                                        name="paymentMethod"
                                        value="debit"
                                        checked={formData.paymentMethod === 'debit'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="debit">
                                        <span className="payment-icon">💳</span>
                                        Debit Card
                                    </label>
                                </div>
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="paypal"
                                        name="paymentMethod"
                                        value="paypal"
                                        checked={formData.paymentMethod === 'paypal'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="paypal">
                                        <span className="payment-icon">🅿️</span>
                                        PayPal
                                    </label>
                                </div>
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="applepay"
                                        name="paymentMethod"
                                        value="applepay"
                                        checked={formData.paymentMethod === 'applepay'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="applepay">
                                        <span className="payment-icon">🍎</span>
                                        Apple Pay
                                    </label>
                                </div>
                                <div className="payment-option">
                                    <input
                                        type="radio"
                                        id="cash"
                                        name="paymentMethod"
                                        value="cash"
                                        checked={formData.paymentMethod === 'cash'}
                                        onChange={handleInputChange}
                                    />
                                    <label htmlFor="cash">
                                        <span className="payment-icon">💵</span>
                                        Cash on Delivery
                                    </label>
                                </div>
                            </div>

                            {(formData.paymentMethod === 'credit' || formData.paymentMethod === 'debit') && (
                                <div className="card-details">
                                    <div className="form-grid">
                                        <div className="form-group full-width">
                                            <label htmlFor="cardNumber">Card Number</label>
                                            <input
                                                type="text"
                                                id="cardNumber"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="1234 5678 9012 3456"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="expiryDate">Expiry Date</label>
                                            <input
                                                type="text"
                                                id="expiryDate"
                                                name="expiryDate"
                                                placeholder="MM/YY"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="cvv">CVV</label>
                                            <input
                                                type="text"
                                                id="cvv"
                                                name="cvv"
                                                placeholder="123"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="promo-code-section">
                            <h2>Promo Code</h2>
                            <div className="promo-input-group">
                                <input
                                    type="text"
                                    placeholder="Enter promo code"
                                    value={promoCode}
                                    onChange={(e) => setPromoCode(e.target.value)}
                                    className={promoError ? 'error' : ''}
                                />
                                <button 
                                    type="button" 
                                    onClick={handlePromoSubmit}
                                    className="apply-promo-btn"
                                >
                                    Apply
                                </button>
                            </div>
                            {promoError && <p className="promo-error">{promoError}</p>}
                            {appliedPromo && (
                                <div className="applied-promo">
                                    <span className="promo-success">
                                        ✓ {appliedPromo.description}
                                    </span>
                                    <button 
                                        type="button" 
                                        onClick={() => setAppliedPromo(null)}
                                        className="remove-promo-btn"
                                    >
                                        Remove
                                    </button>
                                </div>
                            )}
                        </div>

                        <div className="order-summary">
                            <h2>Order Summary</h2>
                            <div className="summary-details">
                                <div className="summary-row">
                                    <span>Subtotal</span>
                                    <span>${orderDetails.subtotal.toFixed(2)}</span>
                                </div>
                                {appliedPromo && (
                                    <div className="summary-row discount">
                                        <span>Discount ({appliedPromo.code})</span>
                                        <span>-${discount.toFixed(2)}</span>
                                    </div>
                                )}
                                <div className="summary-row">
                                    <span>Delivery Fee</span>
                                    <span>${orderDetails.deliveryFee.toFixed(2)}</span>
                                </div>
                                <div className="summary-row">
                                    <span>Tax</span>
                                    <span>${orderDetails.tax.toFixed(2)}</span>
                                </div>
                                <div className="summary-row total">
                                    <span>Total</span>
                                    <span>${total.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="place-order-btn">
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
} 