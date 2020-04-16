import React from "react"

import Column from "../Column"

import "./MediaPage.css"

import balelec from "../../assets/images/partners/balelec.png"
import caribana from "../../assets/images/partners/caribana.png"

const MediaPage = () => {
    return (
        <Column id="media" className="scrollable">
            <p>
                <b>THE CURVE</b><br/>
                WOULDN'T BE POSSIBLE WITHOUT THE HELP OF OUR PARTNERS
            </p>
            <img src={balelec} className="partner-logo" />
            <img src={caribana} className="partner-logo" />
        </Column>
    )
}

export default MediaPage 