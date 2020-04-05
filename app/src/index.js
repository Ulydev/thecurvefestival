import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

import "./styles/index.css"
import "./styles/cursor.css"
import "./styles/position.css"
import "./styles/flex.css"
import "./styles/input.css"
import "./styles/border.css"
// add global styles files here

import { interactionController as interaction } from "./interaction/InteractionController"
interaction.connect()

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)