import React from "react"

import Column from "../Column"

import "./LineupPage.css"

const LineupPage = () => {
    return (
        <Column id="lineup" className="scrollable">
            <ul>
                <li>LA MAIN MISE</li>
                <li>STEVANS</li>
                <li className="big">SIM'S</li>
                <li>LA RÉCRÉ (O'HANA)</li>
                <li>SHANTO ET SHAIM</li>
                <li className="big">DIMSUM</li>
                <li>FANNY LEEB</li>
                <li>ADRIEN TOMA</li>
                <li className="big">FDVM</li>
                <li>SOPHIE DE QUAY & THE WAVEGUARDS</li>
                <li className="big">MHMD</li>
                <br/>
                <br/>
                <li className="big">AND MORE TO COME</li>
            </ul>
        </Column>
    )
}

export default LineupPage