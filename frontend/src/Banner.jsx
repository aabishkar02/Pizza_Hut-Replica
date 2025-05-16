import { useState } from "react"
import "./secondStyles.css"

export default function Banner() {
    return <>
        <div className="banner">
            <div className="banners">
                <img src="/banner.jpg" alt="Pizza Hut Banner" className="bannerImg" />
                <img src="/banner.jpg" alt="Pizza Hut Banner" className="bannerImg" />
            </div>
        </div>
    </>
}

