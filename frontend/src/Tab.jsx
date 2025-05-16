import { Link } from "react-router-dom"
import "./styles.css"

export default function Tab({ text }) {
    const link = text.toLowerCase()
    return (
        <Link to={`/${link}`} className="tab">
            <h5 className="tabText">{text}</h5>
        </Link>
    )
}

