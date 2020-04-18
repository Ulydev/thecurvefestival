import { createStore } from "react-hooks-global-state"

import ClickEvent from "./interaction/ClickEvent"
import CommentEvent from "./interaction/CommentEvent"
import GlobalStateEvent from "./interaction/GlobalStateEvent"

const reducer = (state, action) => {
    // define actions
    switch (action.type) {
        case "SET_STAGE": {
            return {
                ...state,
                stage: action.stage
            }
        }
        case "SET_INTERACTIONS_ENABLED": {
            return {
                ...state,
                interactionsEnabled: action.interactionsEnabled
            }
        }
        case "ADD_EVENT": {
            const event = action.event
            switch (event.type) {
                case ClickEvent.type: {
                    return {
                        ...state,
                        clicks: [ ...state.clicks, event]
                    }
                }
                case CommentEvent.type: {
                    return {
                        ...state,
                        comments: [ ...state.comments, event]
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
                case CommentEvent.type: {
                    return {
                        ...state,
                        comments: state.comments.filter(commentEvent => commentEvent !== event)
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
    comments: [],

    viewersCount: 0,
    hostName: "None",

    stage: null,
    interactionsEnabled: true
}

const { dispatch, useGlobalState, getState } = createStore(reducer, initialState)

export { dispatch, useGlobalState, getState }