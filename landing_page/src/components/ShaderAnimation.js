import React, { useRef, useMemo } from 'react'
import { useFrame, useThree, useResource } from "react-three-fiber"

import "./ShaderAnimation.css"

const ShaderAnimation = (props) => {

    const mesh = useRef()
    const [materialRef, material] = useResource()
  
    const { mouse } = useThree()
  
    const lerp = (a, b, k) => (a * (1-k) + b * k)
  
    useFrame((state, delta) => {
        mesh.current.rotation.y = lerp(mesh.current.rotation.y, -mouse.x / 2, 0.05)
        mesh.current.rotation.x = lerp(mesh.current.rotation.x,  mouse.y / 2, 0.05)
        materialRef.current.uniforms.time.value += delta
    })
  
    const uniforms = useMemo(() => ({
        time: {type: 'f', value: 0},
        color1: {type: 'v3', value: [242/255, 107/255, 242/255]},
        color2: {type: 'v3', value: [108/255, 255/255, 251/255]},
        mouse: {type: 'v2', value: mouse}
    }), [])
  
    return (
        <>
            <shaderMaterial
                ref={materialRef}
                attach="material"
                vertexShader={`
                    uniform float time;
                    varying vec2 vUv;

                    void main() {
                        vUv = uv;
                        
                        float t = time / 50.0;
                        vec3 upDirection = vec3(0.2 * sin(position.y * 10.0 + t * 4.0), 0.2 * sin(position.x * 10.0 + t), 0.2 * sin(position.x * 20.0 * (sin((1.0+cos(t)) * 1.0)/(2.0+cos(t*10.0)) + 1.0) + t * 4.0) + sin(cos(t) * 20.0)*0.05);
                        vec3 newPosition = position + normal * upDirection * 2.0;
                
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
                    }
                `}
                fragmentShader={`
                    uniform float time;
                    uniform vec3 color1;
                    uniform vec3 color2;
                    varying vec2 vUv;
        
                    void main() {
                        vec3 color = mix(color1, color2, vUv.y * 2.0);
                        vec3 newColor = color * (0.4 + 0.6 * mod(vUv.y + time * 0.5 + cos(time * 2.0) * 0.1, 1.0)) * (2.0 + sin(vUv.x * 2.0 * 3.1415 + time * 1.0) * 1.0);
                        gl_FragColor = vec4(newColor, 1.0);
                    }
                `}
                wireframe={true}
                uniforms={uniforms}
            />
            {material && (
                <mesh
                    ref={mesh}
                    position={[0, 0, 0]}
                    rotation-y={mouse.x*10.0}
                    material={material}
                >
                    <circleGeometry
                        attach="geometry"
                        args={[3, 40]}
                    />
                </mesh>
            )}
        </>
    )
}

export default ShaderAnimation