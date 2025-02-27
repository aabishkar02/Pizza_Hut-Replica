import { useState } from "react"
import "./secondStyles.css"


export default function PopularCard(props) {
    return <>
        <div className="popularCard">
            <div className="popularCardDetails">
                <div className="popularTagImage">
                    <div className="ppImg">
                        <img src="popularTag.webp" alt="" id="ppImg" />
                    </div>
                    <div className="ppTextDiv">

                            <p></p>
                    </div>
                    <div>
                            
                    </div>
                </div>
                <div className="getStartedDiv">
                    <div className="getStarted">
                        GET STARTED
                    </div>
                </div>
                
            </div>

            <div className="popularDescription">
                <h5 id="pDescription">{props.detail.desc}</h5>
            </div>       
            
        </div>
        
    </>
}