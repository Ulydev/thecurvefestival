// create express app
const express = require('express')
const expressWs = require('@small-tech/express-ws')(express())
const app = expressWs.app
const port = 3001

// middleware
const cors = require("cors")
app.use(cors())

app.get("/", (req, res) => res.send("Server is working"))

function handler(ws, req) {
    ws.room = this.setRoom(req)
    console.log(`* socket connected on ${ws.room}`)

    ws.on("message", msg => {
        console.log("received message", msg)
        this.broadcast(ws, msg, { skipSelf: false })
    })
}

// set up three different stages
app.ws("/stage1", handler)
app.ws("/stage2", handler)
app.ws("/stage3", handler)

app.listen(port, () => console.log(`* app listening at http://localhost:${port}`))