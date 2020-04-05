import React from "react"

import { useGlobalState } from "../state"

import userIcon from "../assets/user.png"

import "./ViewersCount.css"

const ViewersCount = () => {

    const [count] = useGlobalState("viewersCount")

    return (
        <div id="viewers-count" className="border-bottom-right z-inherit flex flex-row align-items-center">
            <img src={userIcon} /> {count}
        </div>
    )
}

export default React.memo(ViewersCount)