import { useState } from "react"
import "./styles.css"
import Button from "./Button"
import Rewards from "./Rewards"
import Tab from "./Tab"

export default function StickyHeader() {
    return <>
        <div className="sticky">
            <div className="stickyContent">
                <p className="stickyText">Select your store for local menus & pricing</p>
                <Tab text = "CARRYOUT"/>
                <Tab text = "DELIVERY"/>
            </div>
            
        </div>
        
    </>
}