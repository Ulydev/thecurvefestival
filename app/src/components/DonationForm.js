import React from "react"

import "./DonationForm.css"

const DonationForm = () => {
    return (
        <div id="donation-form" className="z-inherit flex flex-1">
            <input className="flex-1 border-bottom-left" type="text" placeholder="2" />
            <button className="border-top-right" type="button">DONATE</button>
        </div>
    )
}

export default React.memo(DonationForm)