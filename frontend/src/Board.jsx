import { useState } from "react"
import "./styles.css"

export default function Board(props) {
    return <>
        <div className="board">
            <div className="boardContent">
            <img src={props.path} alt="Description of image" />
            </div>
        </div>
    </>
}

