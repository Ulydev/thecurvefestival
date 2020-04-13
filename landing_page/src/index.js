import React from "react"
import ReactDOM from "react-dom"
import Main from "./components/Main"

import "./assets/fonts/lines-regular-webfont.ttf"

import "./styles/index.css"
import "./styles/variables.css"
import "./styles/flex.css"
import "./styles/fonts.css"

ReactDOM.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>,
    document.getElementById('root')
)