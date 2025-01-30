import { useState } from "react"
import "./secondStyles.css"


export default function PopularCard() {
    return <>
        <div className="popularCard">
            <div className="popularCardDetails">
                <div className="popularTagImage">
                    <div className="ppImg">
                        <img src="popularTag.webp" alt="" id="ppImg" />
                    </div>
                    <div className="ppTextDiv">

                            Supreme Pizza

                            Large, Hand Tossed Pizza

                            $18.99
                    </div>
                    <div>
                            k
                    </div>
                </div>
                <div className="getStartedDiv">
                    <div className="getStarted">
                        GET STARTED
                    </div>
                </div>
                
            </div>

            <div className="popularDescription">
                <h5 id="pDescription">420 cal/slice, 8 slices</h5>
            </div>       
            
        </div>
        
    </>
}