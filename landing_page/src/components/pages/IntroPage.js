import React from "react"

import Column from "../Column"

import "./IntroPage.css"

const IntroPage = () => {
    return (
        <Column id="intro" className="centered">
            {/*
            <span className="date">18.04.2020</span>
            <span className="hashtag">#flattenthecurve</span>
            <a href="https://app.thecurvefestival.org/" className={`neon text-gradient join`}>Join</a>
            */}
            <h3 className="text-gradient">thank you for joining</h3>
            <p>
                With your help, we've been able to collect <b><a target="_blank" href="https://tiltify.com/@thecurve/the-curve-festival/donate" className="text-gradient">$2'400 against the Coronavirus</a></b>.
                We would like to thank you all for attending the event, and hope we'll see you again next time!<br/><br/>
            </p>
            <span className="hashtag">#flattenthecurve</span>
        </Column>
    )
}

export default IntroPage