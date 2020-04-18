import React from "react"

import StreamInformation from "./StreamInformation"
import ViewersCount from "./ViewersCount"
import StageSelectionMinimal from "./StageSelectionMinimal"
import DonationForm from "./DonationForm"
import CommentForm from "./CommentForm"
import ReactionBoard from "./ReactionBoard"
import InteractionsToggle from "./InteractionsToggle"

import "./Controls.css"
import { useGlobalState } from "../state"

const Controls = () => {

    const [interactionsEnabled] = useGlobalState("interactionsEnabled")

    return (
        <>
            {/* <StreamInformation /> */}
            <div id="top-left-anchor" className="border-top-left border-bottom-right clip-children neon">
                { interactionsEnabled ? <ViewersCount /> : null }
                <DonationForm />
            </div>
            <StageSelectionMinimal />
            <InteractionsToggle className={interactionsEnabled ? "" : "lower"} />
            { interactionsEnabled ? (
                <>
                    <CommentForm />
                    <ReactionBoard />
                </>
            ) : null }
        </>
    )
}

export default React.memo(Controls)