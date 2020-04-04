import { createStore } from "react-hooks-global-state"

import ClickEvent from "./interaction/ClickEvent"
import GlobalStateEvent from "./interaction/GlobalStateEvent"

const reducer = (state, action) => {
    // define actions
    switch (action.type) {
        case "ADD_EVENT": {
            const event = action.event
            switch (event.type) {
                case ClickEvent.type: {
                    return {
                        ...state,
                        clicks: [ ...state.clicks, event]
                    }
                }
                case GlobalStateEvent.type: {
                    return {
                        ...state,
                        ...event.data
                    }
                }
                default: {
                    console.warn("(add) unknown event", event)
                    return state
                }
            }
        }
        case "REMOVE_EVENT": {
            const event = action.event
            switch (event.type) {
                case ClickEvent.type: {
                    return {
                        ...state,
                        clicks: state.clicks.filter(clickEvent => clickEvent !== event)
                    }
                }
                default: {
                    console.warn("(remove) unknown event", event)
                    return state
                }
            }
        }
        default: {
            console.warn("unknown action", action)
            return state;
        }
    }
}

const initialState = {
    // define initial state
    clicks: [],

    viewersCount: 0,
    hostName: "None"
}

const { dispatch, useGlobalState } = createStore(reducer, initialState)

export { dispatch, useGlobalState }