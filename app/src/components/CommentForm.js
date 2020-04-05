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

    const handleSubmit = (event) => {
        event.preventDefault()

        if (comment.length === 0) return // prevent sending empty comment

        sendComment(comment)
        setComment("")
    }

    return (
        <div id="comment-form" className="z-inherit flex flex-1">
            <form onSubmit={handleSubmit} className="flex flex-1">
                <input
                    className="flex-1 border-top-left"
                    type="text"
                    placeholder="Say something nice!"
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    maxLength="50"
                />
                <button
                    className="border-bottom-right"
                    type="submit"
                >SEND</button>
            </form>
        </div>
    )
}

export default React.memo(CommentForm)