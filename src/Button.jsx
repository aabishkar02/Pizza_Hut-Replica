import { useState } from "react"
import "./styles.css"

export default function Button({text}) {
    return <>
        <div className="button">
            <h3 className="buttonText">{text}</h3>
        </div>
    </>
}

