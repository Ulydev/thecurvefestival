import React from "react"

import Column from "../Column"

import "./LineupPage.css"

const LineupPage = () => {
    return (
        <Column id="lineup" className="scrollable">
            <span className="scene">SCENE 1</span>
            <table>
                <tr>
                    <td>18:00</td>
                    <td>LA RÉCRÉ (O'HANA)</td>
                </tr>
                <tr>
                    <td>19:00</td>
                    <td>DIMSUM</td>
                </tr>
                <tr>
                    <td>20:00</td>
                    <td>MHMD</td>
                </tr>
                <tr>
                    <td>21:00</td>
                    <td>FDVM</td>
                </tr>
                <tr>
                    <td>22:00</td>
                    <td>AXEL PAEREL</td>
                </tr>
                <tr>
                    <td>22:30</td>
                    <td>ADRIEN TOMA</td>
                </tr>
                <tr>
                    <td>23:40</td>
                    <td>SIKS</td>
                </tr>
            </table>
            <span className="scene">SCENE 2</span>
            <table>
                <tr>
                    <td>18:00</td>
                    <td>SIM'S</td>
                </tr>
                <tr>
                    <td>18:40</td>
                    <td>STEVANS</td>
                </tr>
                <tr>
                    <td>19:20</td>
                    <td>THE CLIVE</td>
                </tr>
                <tr>
                    <td>20:00</td>
                    <td>ALEJANDRO REYES</td>
                </tr>
                <tr>
                    <td>20:40</td>
                    <td>FANNY LEEB</td>
                </tr>
                <tr>
                    <td>21:10</td>
                    <td>THE YELINS</td>
                </tr>
                <tr>
                    <td>22:00</td>
                    <td>SOPHIE DE QUAY & THE WAVEGUARDS</td>
                </tr>
                <tr>
                    <td>23:00</td>
                    <td>SANTO ET SHAIM</td>
                </tr>
            </table>
            <span className="scene">SCENE 3</span>
            <table>
                <tr>
                    <td>18:00 - 00:00</td>
                    <td>LA MAIN MISE</td>
                </tr>
            </table>
        </Column>
    )
}

export default LineupPage