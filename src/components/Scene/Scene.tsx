import { Stars } from "@/shared/Stars";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";
import { Sun } from "@/components/Sun";

import "./styles.scss";

const Scene = () => {
  const mouseButtons = {
    LEFT: THREE.MOUSE.PAN,
    MIDDLE: THREE.MOUSE.DOLLY,
    RIGHT: THREE.MOUSE.ROTATE
  };

  return (
    <div className="main-scene">
      <Canvas camera={{ position: [0, 0, 20], fov: 60 }}>
        <color attach="background" args={["black"]} />
        <ambientLight intensity={0.5} />

        <OrbitControls enableRotate={false} mouseButtons={mouseButtons} />
        <Stars />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          decay={0}
          intensity={Math.PI}
        />
        <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
        <Sun position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default Scene;
