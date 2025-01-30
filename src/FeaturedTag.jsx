import { useState } from "react"
import "./secondStyles.css"

export default function FeaturedTag({path}) {
    return <>
        <div className="fTag">
            <div className="fTagPhoto">
                <img src={path} alt="Description of image" />
            </div>
            <div className="fTagDetails">
                <p className="fDOne">$7 Deal Lover's Menu</p>
                <p className="fDTwo">Choose 2 or more faves, 7 days a week</p>
            </div>
        </div>
    </>
}

