import React, { useEffect } from "react"

import { dispatch } from "../state"

import "./Comment.css"

const Comment = ({ event }) => {

    const { data } = event

    useEffect(() => {
        setTimeout(() => {
            console.debug("removed event", event)
            dispatch({ type: "REMOVE_EVENT", event })
        }, 4200)
    }, []) // [] to run only once

    return (
        <div
            className="absolute comment"
            style={{
                top: window.mobilecheck() ? (120 + Math.random() * (window.innerHeight - 240)) : (32 + Math.random() * (window.innerHeight / 2 - 64)),
                right: window.mobilecheck() ? (32 + Math.random() * 80) : (32 + Math.random() * 360)
            }}
            width="64"
            height="64"
            viewBox="0 0 340 340"
        >
            <span>{data}</span>
        </div>
    )
}

export default React.memo(Comment)