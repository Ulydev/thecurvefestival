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

const broadcastViewersCount = () => {
    broadcast(JSON.stringify({
        type: "GLOBAL_STATE",
        data: {
            viewersCount: appWSServer.clients.size,
            hostName: "OFFLINE" // TODO: dynamic host
        }
    }))
}

app.ws("/", (ws, req) => {
    console.log("* socket connected")

    broadcastViewersCount()
    ws.on("close", broadcastViewersCount)

    ws.on("message", msg => {
        console.log("received message", msg)
        broadcast(msg)
    })

})

app.listen(port, () => console.log(`* app listening at http://localhost:${port}`))