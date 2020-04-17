import { interactionController as interaction } from "./interaction/InteractionController"
import { dispatch } from "./state"

const setStage = (stage) => {
    dispatch({ type: "SET_STAGE", stage })
    interaction.connect(`/stage${stage}`)
}

export {
    setStage
}