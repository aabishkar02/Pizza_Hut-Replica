import { Link } from "react-router-dom"
import "./styles.css"

export default function FeaturedTag({ url, value }) {
    return (
        <div className="featured-item">
            <div className="featured-image">
                <img src={url} alt={value} />
                <div className="featured-overlay">
                    <Link to="/order" className="order-btn">Order Now</Link>
                </div>
            </div>
            <div className="featured-details">
                <h3>{value.split(' - ')[0]}</h3>
                <p>{value.split(' - ')[1]}</p>
            </div>
        </div>
    )
}

