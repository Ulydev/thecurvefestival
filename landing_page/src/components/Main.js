import React from 'react'
import { Canvas } from "react-three-fiber"

import { useGlobalState } from "../state"

import Header from "./Header"
import Menu from "./Menu"
import SocialMedia from "./SocialMedia"
import Content from "./Content"
import ShaderAnimation from "./ShaderAnimation"

const Main = () => {

    const [route, setRoute] = useGlobalState("route")
    const showAnimation = route === "intro"

    return (
        <>
            <Header>
                <Menu />
            </Header>
            <SocialMedia />
            <Content />
            <div id="canvas-container" className={showAnimation ? "" : "hide"}>
                <Canvas
                    pixelRatio={1}
                >
                    <ShaderAnimation />
                </Canvas>
            </div>
        </>
    )
}

export default Main
