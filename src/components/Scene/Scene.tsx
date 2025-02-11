import { Sphere } from "@/shared/Sphere";
import { Canvas } from "@react-three/fiber";

const Scene = () => {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight
        position={[10, 10, 10]}
        angle={0.15}
        penumbra={1}
        decay={0}
        intensity={Math.PI}
      />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      <Sphere position={[1.2, 0, 0]} />
    </Canvas>
  );
};

export default Scene;
