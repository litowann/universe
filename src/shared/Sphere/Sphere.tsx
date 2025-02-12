import { SphereType } from "@/types/types";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";

const Sphere = (props: SphereType) => {
  const {
    materialColor = "#2f74c0",
    materialColorHover = "hotpink",
    sphereGeometryArgs = []
  } = props;
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
      <sphereGeometry args={sphereGeometryArgs} />
      <meshStandardMaterial
        color={hovered ? materialColorHover : materialColor}
      />
    </mesh>
  );
};

export default Sphere;
