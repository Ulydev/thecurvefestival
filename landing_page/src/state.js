import { createGlobalState } from 'react-hooks-global-state'

const initialState = {
    route: "intro"
}
const { useGlobalState } = createGlobalState(initialState)

export { useGlobalState }
