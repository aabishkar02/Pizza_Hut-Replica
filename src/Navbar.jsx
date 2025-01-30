import { useState } from "react"
import "./styles.css"
import Button from "./Button"
import Rewards from "./Rewards"

export default function Navbar() {
    return <>
        <div className="navMain">
            <div className="navbar">
                <div className="left">
                    <div className="logo">

                    </div>
                    <Button text= "Deals"/>
                    <Button text= "Menu"/>
                </div>
                <div className="right">
                    <Rewards text="Hut Rewards" />
                    <Button text= "$0.00"/>
                </div>
            </div>
        </div>
        
    </>
}