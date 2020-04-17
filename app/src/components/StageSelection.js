import React, { useState, useEffect } from "react"

import config from "../interaction/config"

import { setStage } from "../actions"

import "./StageSelection.css"

const StageSelection = () => {

    const [thumbnails, setThumbnails] = useState([null, null, null])

    useEffect(() => {
        const downloadThumbnails = async () => {
            const requests = config.STAGES_ID.map(id => {
                return fetch(`https://vimeo.com/api/v2/video/${id}.json`)
                    .then(response => response.json())
                    .then(json => json[0]["thumbnail_large"])
            })
            setThumbnails(await Promise.all(requests))
        }
        downloadThumbnails()
    }, [])
    
    return (
        <div
            id="stage-selection"
            className="flex flex-column align-items-center"
        >
            {config.STAGES.map((url, i) => {
                const stage = i + 1
                return (
                    <a
                        key={i}
                        href={`#stage${stage}`}
                        className="stage-selection-item flex-1 flex align-items-center justify-content-center clip-children border-bottom-left border-top-right neon"
                        onClick={() => setStage(stage)}
                    >
                        <span className="font-title text-gradient">Stage {stage}</span>
                        <div
                            className="stage-selection-item-background-fade-in-container"
                        >
                            <div
                                className={`stage-selection-item-background`}
                                style={{ backgroundImage: `url(${thumbnails[i]})` }}
                            />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default React.memo(StageSelection)