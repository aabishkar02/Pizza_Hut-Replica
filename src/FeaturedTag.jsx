import { useState } from "react"
import "./secondStyles.css"

export default function FeaturedTag(props) {
    return <>
        <div className="fTag">
            <div className="fTagPhoto">
                <img src={props.url} alt="Description of image" />
            </div>
            <div className="fTagDetails">
                <p className="fDOne">$7 Deal Lover's Menu</p>
                <p className="fDTwo">{props.value}</p>
            </div>
        </div>
    </>
}

