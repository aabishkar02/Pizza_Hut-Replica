import { useState } from "react"
import "./styles.css"

export default function Tab({text}) {
    return <>
        <div className="tab">
            <h5 className="tabText">{text}</h5>
        </div>
    </>
}

