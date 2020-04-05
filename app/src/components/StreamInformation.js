import React from "react"

import { useGlobalState } from "../state"

import "./StreamInformation.css"

const StreamInformation = () => {

    const [hostName] = useGlobalState("hostName")

    return (
        <div id="stream-information">
            Now hosting: {hostName}
        </div>
    )
}

export default React.memo(StreamInformation)