import { useState } from "react"
import "./styles.css"
import FeaturedTag from "./FeaturedTag"

export default function Featured({path}) {
    return <>
        <div className="featuredMain">
            <div className="featuredHeader">
                <h5 className="fhText">Featured</h5>
            </div>
            <div className="featuredContainer">
                <FeaturedTag path = {path}/>
                <FeaturedTag path = {path}/>
                <FeaturedTag path = {path}/>
                <FeaturedTag path = {path}/>
                
            </div>
        </div>
    </>
}

