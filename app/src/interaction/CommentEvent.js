import Event from "./Event"

class CommentEvent extends Event {
    static type = "COMMENT"

    constructor(data) {
        super(data)
        this.type = CommentEvent.type
    }

    // factory
    static fromMessage = msg => {
        const event = new CommentEvent(msg)
        return event
    }
    toMessage = () => JSON.stringify({
        type: this.type,
        data: this.data
    })
}

export default CommentEvent