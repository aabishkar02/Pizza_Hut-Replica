import { useState } from "react"
import "./secondStyles.css"
import PopularCard from "./PopularCard"

export default function PopularMenu(props) {
    return <>
        <div className="popularMenuDiv">
            <div className="popularMenu">
                <div className="pPizzasTitleDiv">
                    <h1 className="pPizzasTitle">Popular Pizzas</h1>
                </div>
                <div className="pPizzasMenu">
                    {props.details.map((card) => (
                        <PopularCard detail = {card}/>
                    ))}
                    
                </div>
            </div>
        </div>
    </>
}

