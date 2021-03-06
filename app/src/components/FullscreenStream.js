import React, { useMemo } from "react"

import VimeoPlayer from "react-player/lib/players/Vimeo"

import "./FullscreenStream.css"

import offlineImage from "../assets/offline.png"

import config from "../interaction/config"

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);

const FullscreenStream = ({ stage }) => {

    return (
        <div className='stream-player-wrapper'>
            <VimeoPlayer
                className='stream-player'
                url={config.STAGES[stage - 1]}
                light={iOS}
                controls={iOS}
                playsinline={iOS}
                width='100%'
                height='100%'
                config={{
                    vimeo: {
                        playerOptions: {
                            quality: "1080p"
                        }
                    }
                }}
                playing
            />
        </div>
    )
}

export default React.memo(FullscreenStream)