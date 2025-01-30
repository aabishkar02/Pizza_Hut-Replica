import { useState } from "react"
import "./styles.css"
import Button from "./Button"

export default function StartHere({text}) {
    return <>
        <div className="startHere">
            <div className="startHereContent">
                <div className="startHereLeft">
                    <p className="startText">Start here</p>
                </div>
                <div className="startHereRight">
                    <p className="startSecondText">Find your store to see local deals</p>
                    <div className="findDeals">
                        <p className="findDealsText">FIND DEALS</p>
                    </div>
                </div>

            </div>
        </div>
    </>
}

