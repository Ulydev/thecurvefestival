import React from "react"

import "./Header.css"

const Header = ({ children }) => {
    return (
        <div id="title">
            <h1 className="gradient">
                The
                <br/>
                Curve
            </h1>
            { children }
        </div>
    )
}

export default Header