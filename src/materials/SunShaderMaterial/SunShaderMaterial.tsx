import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";

const SunShaderMaterial = shaderMaterial(
  {
    uTime: 0,
    uColorA: new THREE.Color("#ff4e00"),
    uColorB: new THREE.Color("#fcd703")
  },
  `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    highp float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
    }

    float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(
        mix(a, b, u.x),
        mix(c, d, u.x),
        u.y
      );
    }

    float fbm(vec2 st) {
      float value = 0.0;
      float amp = 0.5;
      for (int i = 0; i < 5; i++) {
        value += amp * noise(st);
        st *= 2.02;
        amp *= 0.5;
      }
      return value;
    }

    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorB;
    varying vec2 vUv;

    void swirl(inout vec2 p, float amount) {
      p -= 0.5;
      float r = length(p);
      float a = atan(p.y, p.x);
      a += amount * smoothstep(1.0, 0.0, r);
      p = r * vec2(cos(a), sin(a));
      p += 0.5;
    }

    void main() {
      vec2 uv = vUv;
      swirl(uv, 1.5 * sin(uTime * 0.3));
      float n = fbm(uv * 3.0 + uTime * 0.5);
      float n2 = fbm(uv * 3.0 - uTime * 0.2);
      n += 0.5 * n2;
      vec3 color = mix(uColorA, uColorB, smoothstep(0.2, 1.0, n));
      gl_FragColor = vec4(color, 1.0);
    }
  `
);

export default SunShaderMaterial;
