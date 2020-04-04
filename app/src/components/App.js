import React from "react"

import StreamInformation from "./StreamInformation"
import ViewersCount from "./ViewersCount"
import DonationForm from "./DonationForm"
import FullscreenStream from "./FullscreenStream"

const App = () => {
    return (
        <div id="app">
            <div id="controls">
                <StreamInformation />
                <ViewersCount />
                <DonationForm />
            </div>
            <FullscreenStream />
        </div>
    )
}

export default App
