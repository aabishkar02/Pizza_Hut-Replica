import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import "./styles.css"
import Button from "./Button"
import Rewards from "./Rewards"
import { ValueContext } from "./ValueContext"

export default function Navbar() {
    const { value } = useContext(ValueContext)
    return (
        <nav className="navMain">
            <div className="navbar">
                <div className="left">
                    <Link to="/" className="logo">
                        <img src="/images/pizza-hut-logo.svg" alt="Pizza Hut" />
                    </Link>
                    <Button text="Deals" link="/deals" />
                    <Button text="Menu" link="/menu" />
                    <Button text="Delivery" link="/delivery" />
                    <Button text="Locations" link="/locations" />
                </div>
                <div className="right">
                    <Rewards text="Hut Rewards®" />
                    <Button text="Sign In" link="/signin" />
                    <Link to="/order" className="order-now-btn">Start Order</Link>
                </div>
            </div>
        </nav>
    )
}