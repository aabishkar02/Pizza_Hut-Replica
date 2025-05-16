import { useState } from "react"
import "./styles.css"
import FeaturedTag from "./FeaturedTag"

export default function Featured({ path }) {
    return (
        <section className="featured-section">
            <div className="featured-container">
                <div className="featured-header">
                    <h2>Featured Items</h2>
                    <p>Check out our most popular deals and pizzas</p>
                </div>
                <div className="featured-grid">
                    {path.map((item, index) => (
                        <FeaturedTag 
                            key={index}
                            url={item.url}
                            value={item.desc}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

