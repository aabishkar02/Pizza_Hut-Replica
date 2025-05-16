import { Link } from "react-router-dom"
import "./secondStyles.css"

export default function Footer() {
    return (
        <footer className="ph-footer">
            <div className="ph-footer-content">
                <div className="ph-footer-top">
                    <div className="ph-footer-links">
                        <div className="ph-footer-section">
                            <h3>MENU</h3>
                            <Link to="/deals">Deals</Link>
                            <Link to="/menu">Pizza</Link>
                            <Link to="/menu">Wings</Link>
                            <Link to="/menu">Sides</Link>
                            <Link to="/menu">Pasta</Link>
                            <Link to="/menu">Desserts</Link>
                            <Link to="/menu">Drinks</Link>
                        </div>
                        <div className="ph-footer-section">
                            <h3>ABOUT</h3>
                            <Link to="/about">Our Story</Link>
                            <Link to="/franchising">Franchising</Link>
                            <Link to="/careers">Careers</Link>
                            <Link to="/nutrition">Nutrition</Link>
                            <Link to="/locations">Locations</Link>
                        </div>
                        <div className="ph-footer-section">
                            <h3>HELP</h3>
                            <Link to="/track-order">Track Order</Link>
                            <Link to="/contact">Contact Us</Link>
                            <Link to="/faq">FAQs</Link>
                            <Link to="/gift-cards">Gift Cards</Link>
                            <Link to="/feedback">Store Feedback</Link>
                        </div>
                    </div>
                    <div className="ph-footer-connect">
                        <div className="ph-social">
                            <h3>CONNECT WITH US</h3>
                            <div className="ph-social-icons">
                                <a href="https://facebook.com/pizzahut" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                                <a href="https://twitter.com/pizzahut" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://instagram.com/pizzahut" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <i className="fab fa-instagram"></i>
                                </a>
                                <a href="https://youtube.com/pizzahut" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </div>
                        </div>
                        <div className="ph-app">
                            <h3>GET THE APP</h3>
                            <div className="ph-app-buttons">
                                <a href="#" className="ph-app-btn">
                                    <i className="fab fa-apple"></i>
                                    <div>
                                        <span>Download on the</span>
                                        <strong>App Store</strong>
                                    </div>
                                </a>
                                <a href="#" className="ph-app-btn">
                                    <i className="fab fa-google-play"></i>
                                    <div>
                                        <span>Get it on</span>
                                        <strong>Google Play</strong>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ph-footer-bottom">
                    <div className="ph-legal">
                        <Link to="/privacy">Privacy Policy</Link>
                        <Link to="/terms">Terms & Conditions</Link>
                        <Link to="/accessibility">Accessibility</Link>
                        <Link to="/sitemap">Site Map</Link>
                    </div>
                    <p className="ph-copyright">©{new Date().getFullYear()} Pizza Hut, LLC. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

