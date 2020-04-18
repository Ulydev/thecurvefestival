import React, { useState } from "react"

import "./DonationForm.css"

import config from "../interaction/config"

const DonationForm = () => {

    return (
        <a
            id="donation-button"
            className="z-inherit button flex clip-children"
            href={config.DONATION_URL}
            target="_blank"
        >
            DONATE
        </a>
    )
}

export default React.memo(DonationForm)