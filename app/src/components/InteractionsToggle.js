import React from "react"
import { useGlobalState } from "../state"

import { setInteractionsEnabled } from "../actions"

import "./InteractionsToggle.css"

const InteractionsToggle = ({ className }) => {

    const [interactionsEnabled] = useGlobalState("interactionsEnabled")

    return (
        <div
            id="interactions-toggle"
            className={`neon border-top-left border-bottom-right ${className}`}
            onClick={() => setInteractionsEnabled(!interactionsEnabled)}
        >
            Interactions {interactionsEnabled ? "on" : "off"}
        </div>
    )
}

export default InteractionsToggle