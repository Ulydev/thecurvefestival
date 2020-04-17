// create express app
const express = require("express")
const app = express()
const port = 3001

// add websocket bindings
const expressWS = require("express-ws")(app)
const appWSServer = expressWS.getWss("/")

// middleware
const cors = require("cors")
app.use(cors())

app.get("/", (req, res) => res.send("Server is working"))

const broadcast = msg => {
    console.log("broadcasted message", msg)
    appWSServer.clients.forEach(client => client.send(msg))
}

/*
const broadcastViewersCount = () => {
    broadcast(JSON.stringify({
        type: "GLOBAL_STATE",
        data: {
            viewersCount: appWSServer.clients.size,
            hostName: "OFFLINE" // TODO: dynamic host
        }
    }))
}
*/

const handler = (ws, req) => {
    ws.room = this.setRoom(req)
    console.log(`* socket connected on ${ws.room}`)

    // DEBUG: viewers count and stream information (now included directly in video)
    /* broadcastViewersCount()
    ws.on("close", broadcastViewersCount) */

    ws.on("message", msg => {
        console.log("received message", msg)
        this.broadcast(ws, msg)
    })
}

// set up three different stages
app.ws("/stage1", handler)
app.ws("/stage2", handler)
app.ws("/stage3", handler)

app.listen(port, () => console.log(`* app listening at http://localhost:${port}`))