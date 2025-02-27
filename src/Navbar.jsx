import { useContext, useState } from "react"
import "./styles.css"
import Button from "./Button"
import Rewards from "./Rewards"
import  {ValueContext} from "./ValueContext"

export default function Navbar() {
    const {value} = useContext(ValueContext)
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
                    <Button text= {value}/>
                </div>
            </div>
        </div>
        
    </>
}