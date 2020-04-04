import config from "./config"

import { dispatch } from "../state"

import WebSocketClient from "./AutoReconnectingWebSocket"

import Event from "./Event"
import ClickEvent from "./ClickEvent"
import GlobalStateEvent from "./GlobalStateEvent"

class InteractionController {
    connect = () => {
        this.client = new WebSocketClient()
        this.client.open(config.WEBSOCKET_URI)
        this.client.onmessage = (msg, flags, number) => this.receiveEvent(this.fromMessage(msg), flags, number)
    }

    fromMessage = msg => {
        const parsed = JSON.parse(msg.data)
        const data = parsed.data
        const type = parsed.type
        switch (type) {
            case ClickEvent.type:           return ClickEvent.fromMessage(data)
            case GlobalStateEvent.type:    return GlobalStateEvent.fromMessage(data)
            default:                        return Event.fromMessage(data)
        }
    }

    receiveEvent = (event, flags, number) => {
        console.debug("received event #", number, event)
        event.id = number // for internal key ordering
        switch (event.type) {
            case ClickEvent.type:
            case GlobalStateEvent.type:
                return dispatch({ type: "ADD_EVENT", event })
            default: console.warn("unknown event", event)
        }
    }

    sendEvent = event => {
        console.debug("sent event", event, event.toMessage())
        this.client.send(event.toMessage())
    }
}

export default InteractionController

const interactionController = new InteractionController()
export { interactionController }