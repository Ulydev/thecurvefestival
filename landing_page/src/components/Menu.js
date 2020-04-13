import React from "react"

import { useGlobalState } from "../state"

import "./Menu.css"

const Menu = () => {

    const [route, setRoute] = useGlobalState("route")

    return (
        <div id="menu">
            <a href="#" onClick={() => setRoute("intro")} className={`neon gradient ${route==="intro" ? "active" : ""}`}>Intro</a>
            <a href="#" onClick={() => setRoute("why")} className={`neon gradient ${route==="why" ? "active" : ""}`}>Why</a>
            <a href="#" onClick={() => setRoute("lineup")} className={`neon gradient ${route==="lineup" ? "active" : ""}`}>Lineup</a>
            <a href="https://app.thecurvefestival.org/" className={`neon gradient ${route==="join" ? "active" : ""}`}>Join</a>
        </div>
    )
}

export default Menu