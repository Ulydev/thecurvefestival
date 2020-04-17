import React, { useMemo } from "react"

import VimeoPlayer from "react-player/lib/players/Vimeo"

import "./FullscreenStream.css"

import offlineImage from "../assets/offline.png"

import config from "../interaction/config"

const FullscreenStream = ({ stage }) => {

    return (
        /* <div id="fullscreen-stream" style={{ backgroundColor: "black", opacity: 0.4 }} className="pointer-events-none">
            <img id="offline-image" src={offlineImage} />
        </div> */
        /* <YouTube
            id="fullscreen-stream"
            className="pointer-events-none"
            videoId={christianLofferStream} //TODO: change video id
            opts={opts}
        /> */
        <div className='stream-player-wrapper'>
            <VimeoPlayer
                className='stream-player'
                url={config.STAGES[stage - 1]}
                width='100%'
                height='100%'
                playing
            />
        </div>
    )
}

export default React.memo(FullscreenStream)