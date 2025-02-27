import { useContext, useState } from "react"
import "./styles.css"
import { ValueContext } from "./ValueContext"

export default function Button({text}) {
    const {setValue} = useContext(ValueContext)
    const {value} = useContext(ValueContext)
    return <>
        <div className="button" onClick={() => setValue(value + 1)}>
            <h3 className="buttonText">{text}</h3>
        </div>
    </>
}

