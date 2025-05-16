import { useState } from "react"
import { Link } from "react-router-dom"
import "./dealsStyles.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function DealsPage() {
    const deals = [
        {
            id: 1,
            title: "Large 2-Topping Pizza",
            description: "Get a Large 2-Topping Pizza for just $10.99",
            price: 10.99,
            originalPrice: 14.99,
            image: "/fTag.jpg",
            code: "2TOPPINGDEAL"
        },
        {
            id: 2,
            title: "Family Dinner Box",
            description: "1 Large Pizza, 8 Wings & Breadsticks",
            price: 24.99,
            originalPrice: 32.99,
            image: "/fTag.jpg",
            code: "FAMILYBOX"
        },
        {
            id: 3,
            title: "Wing Wednesday",
            description: "50% off on all wings every Wednesday",
            price: 7.99,
            originalPrice: 15.99,
            image: "/fTag.jpg",
            code: "WINGSDAY"
        },
        {
            id: 4,
            title: "Student Special",
            description: "Medium 1-Topping Pizza + Drink",
            price: 8.99,
            originalPrice: 12.99,
            image: "/fTag.jpg",
            code: "STUDENT"
        },
        {
            id: 5,
            title: "Weekend Party Pack",
            description: "2 Large Pizzas + 2L Drink",
            price: 25.99,
            originalPrice: 35.99,
            image: "/fTag.jpg",
            code: "WEEKEND"
        },
        {
            id: 6,
            title: "Lunch Special",
            description: "Personal Pan Pizza + Side",
            price: 6.99,
            originalPrice: 9.99,
            image: "/fTag.jpg",
            code: "LUNCH"
        }
    ]

    return (
        <>
            <Navbar />
            <div className="deals-page">
                <div className="deals-hero">
                    <h1>Hot Deals & Offers</h1>
                    <p>Save big on your favorite Pizza Hut items</p>
                </div>

                <div className="deals-container">
                    <div className="deals-grid">
                        {deals.map(deal => (
                            <div key={deal.id} className="deal-card">
                                <div className="deal-image">
                                    <img src={deal.image} alt={deal.title} />
                                    <div className="deal-savings">
                                        Save ${(deal.originalPrice - deal.price).toFixed(2)}
                                    </div>
                                </div>
                                <div className="deal-content">
                                    <h3>{deal.title}</h3>
                                    <p>{deal.description}</p>
                                    <div className="deal-price">
                                        <span className="current-price">${deal.price.toFixed(2)}</span>
                                        <span className="original-price">${deal.originalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="deal-code">
                                        Use Code: <span>{deal.code}</span>
                                    </div>
                                    <Link to="/order" className="order-deal-btn">
                                        Order Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="deals-footer">
                    <div className="deals-info">
                        <h2>How to Redeem</h2>
                        <ol>
                            <li>Choose your favorite deal</li>
                            <li>Click "Order Now"</li>
                            <li>Enter the promo code at checkout</li>
                            <li>Enjoy your savings!</li>
                        </ol>
                        <p className="deals-terms">
                            *Terms and conditions apply. Prices may vary by location.
                            Not valid with other offers. Limited time only.
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
} 