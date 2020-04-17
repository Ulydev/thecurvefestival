import React from "react"

import { useGlobalState } from "../state"

import config from "../interaction/config"

import { setStage } from "../actions"

import "./StageSelectionMinimal.css"

const StageSelectionMinimal = () => {

    const [currentStage] = useGlobalState("stage")

    return (
        <div id="stage-selection-minimal" className="flex flex-column align-items-center justify-content-center">
            {config.STAGES.map((url, i) => {
                const stage = i + 1
                return (
                    <a
                        key={i}
                        href={`#stage${stage}`}
                        className={`stage-selection-minimal-link font-title text-gradient ${stage == currentStage ? "selected" : ""}`}
                        onClick={() => setStage(stage)}
                    >
                        Stage {stage}
                    </a>
                )
            })}
        </div>
    )
}

export default StageSelectionMinimal