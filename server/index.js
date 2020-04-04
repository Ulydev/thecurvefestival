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

app.ws("/", (ws, req) => {
    console.log("* socket connected")

    // broadcast
    ws.on("message", msg => {
        console.log("received message", msg)
        appWSServer.clients.forEach(client => client.send(msg))
    })
})

app.listen(port, () => console.log(`* app listening at http://localhost:${port}`))