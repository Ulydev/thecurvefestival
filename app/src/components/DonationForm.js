import React, { useState } from "react"

import "./DonationForm.css"

import config from "../interaction/config"

/*
const sendAmount = amount => {
    console.log("sending amount", amount)
}
*/

const DonationForm = () => {

    const [amount, setAmount] = useState("")

    /*
    const handleSubmit = (event) => {
        event.preventDefault()

        if (amount.length === 0) return // prevent sending invalid amount TODO: check for negative or 0

        sendAmount(amount)
        setAmount("")
    }
    */

    return (
        /*<div
            id="donation-form"
            className="z-inherit flex clip-children border-bottom-left border-top-right neon"
        >
            <form
                className="flex flex-1"
                onSubmit={handleSubmit}
            >
                <span className="input-prefix flex align-items-center">$</span>
                <input
                    className="flex-1" type="number" placeholder="1, 2, 5..." min="1" max="99999"
                    onChange={e => setAmount(e.target.value)}
                    value={amount}
                />
                <button
                    type="submit"
                >
                    DONATE
                </button>
            </form>
        </div>*/
        <a
            id="donation-button"
            className="z-inherit button flex clip-children border-bottom-left border-top-right neon"
            href={config.DONATION_URL}
            target="_blank"
        >
            DONATE
        </a>
    )
}

export default React.memo(DonationForm)