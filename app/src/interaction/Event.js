class Event {
    static type = "EVENT"

    constructor(data) {
        this.data = data
        this.type = "EVENT"
    }

    // factory
    static fromMessage = msg => {
        return new Event(msg.data)
    }
    toMessage = () => JSON.stringify({
        type: this.type,
        data: this.data
    })
}

export default Event