import React from "react"

import { SwitchTransition, CSSTransition } from "react-transition-group"

import { useGlobalState } from "../state"

import IntroPage from "./pages/IntroPage"
import WhyPage from "./pages/WhyPage"
import LineupPage from "./pages/LineupPage"

import "./Content.css"

const Content = () => {

    const [route, setRoute] = useGlobalState("route")

    let page;
    switch (route) {
        case "intro": page = <IntroPage />; break
        case "why": page = <WhyPage />; break
        case "lineup": page = <LineupPage />; break
    }

    return (
        <div id="content">
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={route}
                    addEndListener={(node, done) => {
                        node.addEventListener("transitionend", done, false);
                    }}
                    classNames="fade"
                >
                    {page}
                </CSSTransition>
            </SwitchTransition>
        </div>
    )
}

export default Content