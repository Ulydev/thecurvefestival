import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"

import "./styles/index.css"
import "./styles/cursor.css"
// add global styles files here

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
)