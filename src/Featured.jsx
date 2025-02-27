import { useState } from "react"
import "./styles.css"
import FeaturedTag from "./FeaturedTag"

export default function Featured(props) {
    return <>
        <div className="featuredMain">
            <div className="featuredHeader">
                <h5 className="fhText">Featured</h5>
            </div>
            <div className="featuredContainer">
                {props.path.map((eachPath) => (
                    <FeaturedTag url = {eachPath.url}  value = {eachPath.desc}/>
                ))}
                
                
            </div>
        </div>
    </>
}

