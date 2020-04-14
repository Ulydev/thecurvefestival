import React from "react"

import { useGlobalState } from "../state"

import "./Menu.css"

const Menu = () => {

    const [route, setRoute] = useGlobalState("route")

    return (
        <div id="menu">
            <a href="#" onClick={() => setRoute("why")} className={`neon gradient ${route==="why" ? "active" : ""}`}>About</a>
            <a href="#" onClick={() => setRoute("lineup")} className={`neon gradient ${route==="lineup" ? "active" : ""}`}>Lineup</a>
        </div>
    )
}

export default Menu