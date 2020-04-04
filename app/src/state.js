import { createGlobalState } from "react-hooks-global-state"

const initialState = {
    // define initial state
}

const { useGlobalState } = createGlobalState(initialState)

export default useGlobalState