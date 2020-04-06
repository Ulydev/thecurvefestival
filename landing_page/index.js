/* global AFRAME, THREE */

AFRAME.registerShader("custom", {
  schema: {
    timeMsec: {type: "time", is: "uniform"},
    color: {type: "color", is: "uniform"},
    wireframe: {default: true}
  },
  vertexShader: `
    uniform float timeMsec;
    varying vec2 vUv;

    void main() {
      vUv = uv;

      float time = timeMsec / 1000.0 / 10.0; // time is in seconds
      vec3 upDirection = vec3(0.2 * sin(position.y * 10.0 + time * 4.0), 0.2 * sin(position.x * 10.0 + time), 0.2 * sin(position.x * 20.0 * (sin((1.0+cos(time)) * 1.0)/(2.0+cos(time*10.0)) + 1.0) + time * 4.0) + sin(cos(time) * 20.0)*0.05);
      vec3 newPosition = position + normal * upDirection * 2.0;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform float timeMsec;
    uniform vec3 color;

    void main() {
      float time = timeMsec / 1000.0; 
      vec3 newColor = color * mod(vUv.y + time * 0.5 + cos(time * 2.0) * 0.1, 1.0) * (2.0 + sin(vUv.x * 2.0 * 3.1415 + time * 1.0) * 1.0);
      gl_FragColor = vec4(newColor, 1.0);
    }
  `
})

AFRAME.registerComponent('wireframe', {
  dependencies: ['material'],
  init: function () {
    this.el.components.material.material.wireframe = true;
  }
});

/*
AFRAME.registerShader('custom', {
    schema: {
        color: {type: 'color', is: 'uniform'},
        timeMsec: {type: 'time', is: 'uniform'}
    },

    vertexShader: `
        varying vec2 vUv;
        uniform float timeMsec;

        void main() {
            float time = timeMsec / 1000.0;
            vUv = uv;
            vec3 p = vec3(position);
            p.y += p.x * cos(time * 2.0 + p.x * 12.0) * 0.25;
            p.z += sin(time * 2.0 + p.y * 10.0) * 0.1;
            p.x += cos(time * 1.0 + p.x * 5.0) * 0.1;
            gl_Position = projectionMatrix * modelViewMatrix * vec4( p, 1.0 );
        }
    `,
    fragmentShader: `
        varying vec2 vUv;
        uniform vec3 color;
        uniform float timeMsec; // A-Frame time in milliseconds.

        void main() {
            float time = timeMsec / 1000.0; // Convert from A-Frame milliseconds to typical time in seconds.
            // Use sin(time), which curves between 0 and 1 over time,
            // to determine the mix of two colors:
            //    (a) Dynamic color where 'R' and 'B' channels come
            //        from a modulus of the UV coordinates.
            //    (b) Base color.
            // 
            // The color itself is a vec4 containing RGBA values 0-1.
            vec3 color = vec3(0.0);
            for (int i = 0; i < 3; ++i) {
                float fi = float(i) * 0.5;
                color[i] += mod(time + fi * 0.2 + vUv.x + sin(vUv.y * cos(time)), 1.0);
            }

            gl_FragColor = vec4(color, 1.0);
        }
    `
});
*/