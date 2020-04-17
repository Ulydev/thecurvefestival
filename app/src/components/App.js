import React from "react"

import { SwitchTransition, CSSTransition } from "react-transition-group"

import Header from "./Header"
import Controls from "./Controls"
import FullscreenStream from "./FullscreenStream"
import { useGlobalState } from "../state"

import StageSelection from "./StageSelection"

const App = () => {

    const [stage] = useGlobalState("stage")

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
