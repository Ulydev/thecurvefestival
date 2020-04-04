import React from "react"
import YouTube from "react-youtube"

import "./FullscreenStream.css"

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
            showinfo: 0, // NOTE: parameter is disabled (https://developers.google.com/youtube/player_parameters#release_notes_08_23_2018)
            modestbranding: 1
		}
	}

    return (
        <YouTube
            id="fullscreen-stream"
            className="pointer-events-none"
            videoId={christianLofferStream /* TODO: change video id */}
            opts={opts}
        />
    )
}

export default FullscreenStream