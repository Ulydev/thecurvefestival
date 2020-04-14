import React from "react"

import Column from "../Column"

import "./WhyPage.css"

const WhyPage = () => {
    return (
        <Column id="why" className="centered">
            <span style={{ fontSize: "4em" }}><b>The Curve</b> is</span>
            <span style={{ fontSize: "2.9em" }}>an <b>online</b> festival</span>
            <span style={{ fontSize: "2.6em" }}>against Coronavirus.</span>
            <br/>
            <span style={{ fontSize: "2em" }}>All <b>funds raised</b> during the event</span>
            <span style={{ fontSize: "2.45em" }}>will be <b>donated</b> to charities</span>
            <span style={{ fontSize: "1.9em" }}>helping in the <b>fight</b> against COVID-19.</span>
        </Column>
    )
}

export default WhyPage