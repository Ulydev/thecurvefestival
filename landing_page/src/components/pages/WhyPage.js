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

            <h3 className="text-gradient">THANKS</h3>
            <p>
                We would like to deeply thank <a className="text-gradient" target="_blank" href="https://epfl.ch/"><b>EPFL ArtLab</b></a> for its financial support during the organisation of the event.
            </p>
            <p>
                We would also like to thank the following organizations for helping us in the communication of this event:
            </p>
            <ul style={{ marginBottom: 32 }}>
                <li><img src={require("../../assets/images/partners/caribana.png")} className="partner-logo" /></li>
                <li><img src={require("../../assets/images/partners/rouge.svg")} className="partner-logo" /></li>
                <li><img src={require("../../assets/images/partners/balelec.png")} className="partner-logo" /></li>
            </ul>
        </Column>
    )
}

export default WhyPage