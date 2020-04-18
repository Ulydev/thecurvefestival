import { interactionController as interaction } from "./interaction/InteractionController"
import { dispatch, getState } from "./state"

const connectToStage = (stage) => {
    interaction.connect(`/stage${stage}`)
}

const setStage = (stage) => {
    dispatch({ type: "SET_STAGE", stage })

    // connect to stage only if interactions are enabled
    const interactionsEnabled = getState("interactionsEnabled")
    if (interactionsEnabled) {
        connectToStage(stage)
    }
}

const setInteractionsEnabled = (interactionsEnabled) => {
    dispatch({ type: "SET_INTERACTIONS_ENABLED", interactionsEnabled })

    // disconnect or reconnect to stage depending on interactionsEnabled
    if (interactionsEnabled) {
        const stage = getState("stage")
        connectToStage(stage)
    } else {
        interaction.disconnect()
    }
}

export {
    setStage,
    setInteractionsEnabled
}