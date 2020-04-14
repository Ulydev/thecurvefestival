import React from "react"

import Column from "../Column"

import "./IntroPage.css"

const IntroPage = () => {
    return (
        <Column id="intro" className="centered">
            <span className="date">18.04.2020</span>
            <span className="hashtag">#flattenthecurve</span>
            <a href="https://app.thecurvefestival.org/" className={`neon text-gradient join`}>Join</a>
        </Column>
    )
}

export default IntroPage