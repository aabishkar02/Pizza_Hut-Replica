import { useState } from "react"
import "./styles.css"

export default function Board({path}) {
    return <>
        <div className="board">
            <div className="boardContent">
            <img src={path} alt="Description of image" />
            </div>
        </div>
    </>
}

