import React from "react"

import "./Column.css"

const Column = ({ children, ...props }) => {
    return (
        <div {...props} className={`column ${props.className || ""}`}>
            { children }
        </div>
    )
}

export default Column