const express = require("express")
const expressWS = require("express-ws")(express)
const app = expressWS.app
const port = 3001

const appWSServer = expressWS.getWss("/")

app.ws("/", (ws, req) => {
    console.log("* socket connected")

    // broadcast
    ws.onmessage = msg => {
        console.log(msg.data)
        appWSServer.clients.forEach(client => client.send(msg.data))
    }
})

app.listen(port, () => console.log(`* app listening at http://localhost:${port}`))