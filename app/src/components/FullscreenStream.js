import React from "react"
import YouTube from "react-youtube"

import "./FullscreenStream.css"

import offlineImage from "../assets/offline.png"

const christianLofferStream = "OijrlItssOc"

const FullscreenStream = () => {

    const opts = {
		height: '100%',
		width: '100%',
		playerVars: {
			autoplay: 1,
            controls: 0,
            disablekb: 1,
			cc_load_policy: 0,
			fs: 0,
			iv_load_policy: 3,
			modestbranding: 1,
            rel: 0,
            showinfo: 0 // NOTE: parameter is disabled (https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018)
		}
	}

    return (
        <div id="fullscreen-stream" style={{ backgroundColor: "black", opacity: 0.4 }} className="pointer-events-none">
            <img id="offline-image" src={offlineImage} />
        </div>
        /* <YouTube
            id="fullscreen-stream"
            className="pointer-events-none"
            videoId={christianLofferStream} //TODO: change video id
            opts={opts}
        /> */
    )
}

export default React.memo(FullscreenStream)