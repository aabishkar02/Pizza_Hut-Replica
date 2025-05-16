import { Link } from "react-router-dom"
import "./styles.css"

export default function StartHere() {
    return (
        <div className="startHere">
            <div className="startHereContent">
                <div className="startHereLeft">
                    <p className="startText">Start here</p>
                </div>
                <div className="startHereRight">
                    <p className="startSecondText">Find your store to see local deals</p>
                    <Link to="/deals" className="findDeals">
                        <p className="findDealsText">FIND DEALS</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

