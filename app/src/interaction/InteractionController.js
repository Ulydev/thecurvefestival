import config from "./config"

import { dispatch } from "../state"

import WebSocketClient from "./AutoReconnectingWebSocket"

import Event from "./Event"
import ClickEvent from "./ClickEvent"
import CommentEvent from "./CommentEvent"
import GlobalStateEvent from "./GlobalStateEvent"

class InteractionController {
    connect = (endpoint) => {
        if (this.client) {
            this.disconnect()
        }
        this.client = new WebSocketClient()
        this.client.open(`${config.WEBSOCKET_URI}${endpoint}`)
        this.client.onmessage = (msg, flags, number) => this.receiveEvent(this.fromMessage(msg), flags, number)
    }

    disconnect = () => {
        if (this.client) {
            // force close without reconnect
            this.client.instance.onclose = () => {}
            this.client.instance.close()
            console.debug("Websocket force closed")
            this.client = null
        }
    }

    fromMessage = msg => {
        const parsed = JSON.parse(msg.data)
        const data = parsed.data
        const type = parsed.type
        switch (type) {
            case ClickEvent.type:           return ClickEvent.fromMessage(data)
            case CommentEvent.type:         return CommentEvent.fromMessage(data)
            case GlobalStateEvent.type:     return GlobalStateEvent.fromMessage(data)
            default:                        return Event.fromMessage(data)
        }
    }

    receiveEvent = (event, flags, number) => {
        console.debug("received event #", number, event)
        event.id = number // for internal key ordering
        switch (event.type) {
            case ClickEvent.type:
            case CommentEvent.type:
            case GlobalStateEvent.type:
                return dispatch({ type: "ADD_EVENT", event })
            default: console.warn("unknown event", event)
        }
    }

    sendEvent = event => {
        if (this.client) {
            console.debug("sent event", event, event.toMessage())
            this.client.send(event.toMessage())
        }
    }
}

export default InteractionController

const interactionController = new InteractionController()
export { interactionController }