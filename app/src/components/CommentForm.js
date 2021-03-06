import React, { useState } from "react"

import CommentEvent from "../interaction/CommentEvent"
import { interactionController as interaction } from "../interaction/InteractionController"

import "./CommentForm.css"

const sendComment = comment => {
    const commentEvent = new CommentEvent(comment)
    interaction.sendEvent(commentEvent)
}

const CommentForm = () => {

    const [comment, setComment] = useState("")
    const [canSend, setCanSend] = useState(true)
    const TIMEOUT_DELAY = 1500 // 1.5 seconds

    const handleSubmit = (event) => {
        event.preventDefault()

        if (comment.length === 0) return // prevent sending empty comment
        if (!canSend) return // timeout
            sendComment(comment)
            setComment("")
        setCanSend(false)
        setTimeout(() => setCanSend(true), TIMEOUT_DELAY)
    }

    return (
        <div
            id="comment-form"
            className="z-inherit flex clip-children border-top-left border-bottom-right neon"
        >
            <form onSubmit={handleSubmit} className="flex flex-1">
                <input
                    className="flex-1"
                    type="text"
                    placeholder="Say something nice!"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    maxLength="50"
                />
                <button
                    type="submit"
                >SEND</button>
            </form>
        </div>
    )
}

export default React.memo(CommentForm)