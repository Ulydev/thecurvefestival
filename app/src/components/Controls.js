import React from "react"

import StreamInformation from "./StreamInformation"
import ViewersCount from "./ViewersCount"
import DonationForm from "./DonationForm"

import "./Controls.css"

const Controls = () => {
    return (
        <div id="controls">
            <StreamInformation />
            <ViewersCount />
            <DonationForm />
        </div>
    )
}

export default Controls