import { ThreeElements, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Sphere = (props: ThreeElements["mesh"]) => {
  const meshRef = useRef<Mesh>(null!);

  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 2 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color={hovered ? "hotpink" : "#2f74c0"} />
    </mesh>
  );
};

export default Sphere;
