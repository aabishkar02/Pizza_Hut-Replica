import { useState } from "react"
import "./locationStyles.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function LocationsPage() {
    const [searchQuery, setSearchQuery] = useState("")
    
    return (
        <>
            <Navbar />
            <div className="locations-page">
                <div className="locations-hero">
                    <h1>Find a Pizza Hut Near You</h1>
                    <div className="search-container">
                        <input 
                            type="text"
                            placeholder="Enter ZIP code or city, state"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className="search-btn">Find Stores</button>
                    </div>
                </div>
                
                <div className="locations-content">
                    <div className="locations-info">
                        <h2>Store Hours</h2>
                        <p>Sunday - Thursday: 11:00 AM - 11:00 PM</p>
                        <p>Friday - Saturday: 11:00 AM - 12:00 AM</p>
                        
                        <h2>Services Available</h2>
                        <ul>
                            <li>Carryout</li>
                            <li>Delivery</li>
                            <li>Contactless Delivery</li>
                            <li>Online Ordering</li>
                        </ul>
                        
                        <h2>Contact</h2>
                        <p>For orders: 1-800-123-4567</p>
                        <p>For other inquiries: support@pizzahut.com</p>
                    </div>
                    
                    <div className="map-placeholder">
                        <p>Map integration will be added here</p>
                        <small>Please enter a location to view nearby stores</small>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
} 