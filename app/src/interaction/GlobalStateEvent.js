import Event from "./Event"

class GlobalStateEvent extends Event {
    static type = "GLOBAL_STATE"

    constructor(data) {
        super(data)
        this.type = GlobalStateEvent.type
    }

    // factory
    static fromMessage = msg => {
        const event = new GlobalStateEvent(msg)
        return event
    }
    toMessage = () => JSON.stringify({
        type: this.type,
        data: this.data
    })
}

export default GlobalStateEvent