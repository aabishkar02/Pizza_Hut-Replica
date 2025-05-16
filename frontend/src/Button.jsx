import { Link } from "react-router-dom"
import "./styles.css"

export default function Button({ text, link }) {
    return (
        <Link to={link} className="button">
            {text}
        </Link>
    )
}

