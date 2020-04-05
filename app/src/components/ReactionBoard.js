import React from "react"

import { useGlobalState } from "../state"

import ClickEvent from "../interaction/ClickEvent"
import Position from "../interaction/Position"
import { interactionController as interaction } from "../interaction/InteractionController"

import Reaction from "./Reaction"

import "./ReactionBoard.css"

const sendClick = event => {
    const position = new Position(event.clientX, event.clientY)
    const clickEvent = new ClickEvent({ position })
    interaction.sendEvent(clickEvent)
}

const ReactionBoard = () => {

    const [clicks] = useGlobalState("clicks")

    return (
        <div id="reaction-board" onClick={sendClick}>
            {clicks.map(event => (
                <Reaction
                    key={event.id}
                    event={event}
                />
            ))}
        </div>
    )
}

export default React.memo(ReactionBoard)