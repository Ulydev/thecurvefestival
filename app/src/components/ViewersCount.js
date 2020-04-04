import React from "react"

import { useGlobalState } from "../state"

import "./ViewersCount.css"

const ViewersCount = () => {

    const [count] = useGlobalState("viewersCount")

    return (
        <div id="viewers-count">
            {count} viewers
        </div>
    )
}

export default ViewersCount