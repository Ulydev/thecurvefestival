import React from "react"

import Column from "../Column"

import "./WhyPage.css"

const WhyPage = () => {
    return (
        <Column id="why" className="scrollable">
            <p>
                <b>The Curve Online Music Festival</b> is organized both to entertain the people currently confined in their homes and to participate in the battle against COVID-19. 

This event emerged in the context of the "Lauzhack against the COVID-19 Hackathon", a 72-hour online competition dedicated to fighting the coronavirus crisis, supported by EPFL.

All the collected funds will be donated to the <a className="text-gradient" target="_blank" href="https://covid19responsefund.org/"><b>COVID-19 Solidarity Response Fund</b></a> campaign for the World Health Organization.
            </p>

            <h3 className="text-gradient">TEAM</h3>
            <p>
                This project is completely non-profit and carried by a team of <a className="text-gradient" target="_blank" href="https://epfl.ch/"><b>EPFL</b></a> students:
            </p>
            <ul>
                    <li>Gaspard Peduzzi</li>
                    <li>Jean Chambras</li>
                    <li>Ruben Ganansia</li>
                    <li>Sophia Artioli</li>
                    <li>Ulysse Ramage</li>
                    <li>Valentin Garnier</li>
                    <li>Valentin Quelquejay</li>
                    <li>Yasser Haddad</li>
                </ul>
        </Column>
    )
}

export default WhyPage