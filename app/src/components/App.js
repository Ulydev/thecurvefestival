import React, { useEffect } from "react"

import { SwitchTransition, CSSTransition } from "react-transition-group"

import Header from "./Header"
import Controls from "./Controls"
import FullscreenStream from "./FullscreenStream"
import { useGlobalState } from "../state"

import StageSelection from "./StageSelection"
import { setStage } from "../actions"

const App = () => {

    const [stage] = useGlobalState("stage")

    useEffect(() => {
        try {
            const queryString = window.location.search
            const urlParams = new URLSearchParams(queryString)
            const forceStage = urlParams.get('stage')
            if (forceStage && (forceStage !== "")) {
                setTimeout(
                    () => setStage(parseInt(forceStage)),
                    1000
                )
            }
        } catch (e) {
            console.log("couldn't parse url params")
        }
    }, [])

    return (
        <div id="app">
            <Header />
            { stage ?
                <>
                    <Controls />
                    <FullscreenStream stage={stage} />
                </>
            :
                <StageSelection />
            }
        </div>
    )
}

export default App
