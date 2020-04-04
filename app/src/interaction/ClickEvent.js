import Event from "./Event"

import Position from "./Position"

import { normalize, denormalize } from "./coordinates"

class ClickEvent extends Event {
    static type = "CLICK"

    constructor(data) {
        super(data)
        this.type = ClickEvent.type
    }

    // factory
    static fromMessage = msg => {
        const event = new ClickEvent({
            position: denormalize(msg.position)
        })
        return event
    }
    toMessage = () => JSON.stringify({
        type: this.type,
        data: {
            position: normalize(this.data.position)
        }
    })
}

export default ClickEvent