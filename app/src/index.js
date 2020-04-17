import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

import "./mobilecheck"

import "./assets/fonts/lines-regular-webfont.ttf"

import "./styles/index.css"
import "./styles/cursor.css"
import "./styles/position.css"
import "./styles/flex.css"
import "./styles/input.css"
import "./styles/border.css"
import "./styles/neon.css"
import "./styles/variables.css"
import "./styles/fonts.css"
import "./styles/links.css"
import "./styles/animations.css"
// add global styles files here

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)