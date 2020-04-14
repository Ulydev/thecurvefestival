import React from "react"

import { useGlobalState } from "../state"

import "./Header.css"

const Header = ({ children }) => {

    const [route, setRoute] = useGlobalState("route")

    return (
        <div id="title">
            <div id="title-background" />
            <a
                href="#"
                onClick={() => setRoute("intro")}
                className={`gradient ${route==="intro" ? "active" : ""}`}
            >
                The
                <br/>
                Curve
            </a>
            { children }
        </div>
    )
}

export default Header