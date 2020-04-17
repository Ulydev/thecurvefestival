import React from "react"

import StreamInformation from "./StreamInformation"
import ViewersCount from "./ViewersCount"
import StageSelectionMinimal from "./StageSelectionMinimal"
import DonationForm from "./DonationForm"
import CommentForm from "./CommentForm"
import ReactionBoard from "./ReactionBoard"

import "./Controls.css"

const Controls = () => {
    return (
        <div id="controls">
            {/* <StreamInformation />
            <ViewersCount /> */}
            <StageSelectionMinimal />
            <DonationForm />
            <CommentForm />
            <ReactionBoard />
        </div>
    )
}

export default React.memo(Controls)