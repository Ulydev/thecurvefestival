import React, { useState } from "react"

import { useGlobalState } from "../state"

import ClickEvent from "../interaction/ClickEvent"
import Position from "../interaction/Position"
import { interactionController as interaction } from "../interaction/InteractionController"

import Reaction from "./Reaction"
import Comment from "./Comment"

import "./ReactionBoard.css"

const ReactionBoard = () => {

    const [clicks] = useGlobalState("clicks")
    const [comments] = useGlobalState("comments")
    const [canSend, setCanSend] = useState(true)
    const TIMEOUT_DELAY = 250 // 0.25 seconds

    const sendClick = event => {
        if (!canSend) return // timeout
        setCanSend(false)
            const position = new Position(event.clientX, event.clientY)
            const clickEvent = new ClickEvent({ position })
            interaction.sendEvent(clickEvent)
        setTimeout(() => setCanSend(true), TIMEOUT_DELAY)
    }

    return (
        <div id="reaction-board" onClick={sendClick}>
            {clicks.map(event => (
                <Reaction
                    key={event.id}
                    event={event}
                />
            ))}
            {comments.map(event => (
                <Comment
                    key={event.id}
                    event={event}
                />
            ))}
        </div>
    )
}

export default React.memo(ReactionBoard)