import React, { useEffect } from "react"

import { dispatch } from "../state"

import "./Reaction.css"

const Reaction = ({ event }) => {

    const { data } = event

    useEffect(() => {
        setTimeout(() => {
            //console.debug("removed event", event)
            dispatch({ type: "REMOVE_EVENT", event })
        }, 1200)
    }, []) // [] to run only once

    return (
        <svg
            className="absolute reaction"
            style={{
                top: data.position.y,
                left: data.position.x,
                fill: `hsl(${Math.random() * 360}, ${80 + Math.random() * 20}%, ${50 + Math.random() * 50}%)`
            }}
            width="64"
            height="64"
            viewBox="0 0 340 340"
        >
            <defs>
                <g id="heart">
                    <path 
                        d="M0 200 v-200 h200 
                        a100,100 90 0,1 0,200
                        a100,100 90 0,1 -200,0
                        z" />
                </g>
            </defs>
            <use xlinkHref="#heart" transform="rotate(225,150,121)" />
        </svg>
    )
}

export default React.memo(Reaction)