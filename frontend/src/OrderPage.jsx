import { useState } from "react"
import { Link } from "react-router-dom"
import "./orderStyles.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function OrderPage() {
    const [activeCategory, setActiveCategory] = useState("pizza")
    const [cart, setCart] = useState([])

    const menuCategories = [
        { id: "pizza", name: "Pizza" },
        { id: "wings", name: "Wings" },
        { id: "sides", name: "Sides" },
        { id: "desserts", name: "Desserts" },
        { id: "drinks", name: "Drinks" }
    ]

    const menuItems = {
        pizza: [
            {
                id: 1,
                name: "Supreme Pizza",
                description: "Loaded with pepperoni, Italian sausage, mushrooms, onions & green peppers",
                price: 14.99,
                image: "/popularTag.webp"
            },
            {
                id: 2,
                name: "Pepperoni Lover's® Pizza",
                description: "Extra pepperoni and extra cheese for extra flavor",
                price: 13.99,
                image: "/popularTag.webp"
            },
            {
                id: 3,
                name: "Meat Lover's® Pizza",
                description: "Packed with pepperoni, Italian sausage, ham, bacon, seasoned pork & beef",
                price: 15.99,
                image: "/popularTag.webp"
            },
            {
                id: 4,
                name: "Veggie Lover's® Pizza",
                description: "Fresh mushrooms, onions, green peppers, tomatoes & black olives",
                price: 13.99,
                image: "/popularTag.webp"
            }
        ],
        wings: [
            {
                id: 5,
                name: "Traditional Wings",
                description: "8 pieces of our classic bone-in wings",
                price: 10.99,
                image: "/fTag.jpg"
            },
            {
                id: 6,
                name: "Boneless Wings",
                description: "10 pieces of our breaded boneless wings",
                price: 9.99,
                image: "/fTag.jpg"
            }
        ],
        sides: [
            {
                id: 7,
                name: "Breadsticks",
                description: "8 warm breadsticks served with marinara sauce",
                price: 5.99,
                image: "/fTag.jpg"
            },
            {
                id: 8,
                name: "Cheese Sticks",
                description: "10 crispy sticks of melted cheese served with marinara",
                price: 6.99,
                image: "/fTag.jpg"
            }
        ],
        desserts: [
            {
                id: 9,
                name: "Hershey's® Chocolate Dunkers™",
                description: "8 warm breadsticks drizzled with chocolate",
                price: 6.99,
                image: "/fTag.jpg"
            },
            {
                id: 10,
                name: "Cinnabon® Mini Rolls",
                description: "10 warm, freshly baked cinnamon rolls",
                price: 7.99,
                image: "/fTag.jpg"
            }
        ],
        drinks: [
            {
                id: 11,
                name: "Pepsi®",
                description: "2-liter bottle",
                price: 3.49,
                image: "/fTag.jpg"
            },
            {
                id: 12,
                name: "Mountain Dew®",
                description: "2-liter bottle",
                price: 3.49,
                image: "/fTag.jpg"
            }
        ]
    }

    const addToCart = (item) => {
        setCart([...cart, { ...item, quantity: 1 }])
    }

    const removeFromCart = (itemId) => {
        setCart(cart.filter(item => item.id !== itemId))
    }

    const updateQuantity = (itemId, newQuantity) => {
        setCart(cart.map(item => 
            item.id === itemId ? { ...item, quantity: newQuantity } : item
        ))
    }

    const cartTotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

    return (
        <>
            <Navbar />
            <div className="order-page">
                <div className="menu-sidebar">
                    <h2>Menu</h2>
                    <div className="category-list">
                        {menuCategories.map(category => (
                            <button 
                                key={category.id}
                                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                                onClick={() => setActiveCategory(category.id)}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div className="menu-content">
                    <h1>{menuCategories.find(cat => cat.id === activeCategory).name}</h1>
                    <div className="menu-grid">
                        {menuItems[activeCategory].map(item => (
                            <div key={item.id} className="menu-item">
                                <img src={item.image} alt={item.name} />
                                <div className="item-details">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <div className="item-footer">
                                        <span className="price">${item.price.toFixed(2)}</span>
                                        <button 
                                            className="add-to-cart"
                                            onClick={() => addToCart(item)}
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="cart-sidebar">
                    <h2>Your Cart</h2>
                    {cart.length === 0 ? (
                        <p className="empty-cart">Your cart is empty</p>
                    ) : (
                        <>
                            <div className="cart-items">
                                {cart.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <img src={item.image} alt={item.name} />
                                        <div className="cart-item-details">
                                            <h4>{item.name}</h4>
                                            <div className="quantity-controls">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                >-</button>
                                                <span>{item.quantity}</span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                >+</button>
                                            </div>
                                            <span className="item-total">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </span>
                                            <button 
                                                className="remove-item"
                                                onClick={() => removeFromCart(item.id)}
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total:</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
} 