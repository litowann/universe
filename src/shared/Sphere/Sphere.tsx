import { SphereType } from "@/types/types";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh } from "three";
import { Text } from "@react-three/drei";

const Sphere = (props: SphereType) => {
  const {
    materialColor = "#2f74c0",
    materialColorHover = "hotpink",
    sphereGeometryArgs = [],
    name = "My Sphere"
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
    <group>
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

      <Text
        position={active ? [0, 2.5, 0] : [0, 1.5, 0]}
        fontSize={0.4}
        color="#ffffff"
        anchorX="center"
        anchorY="bottom"
      >
        {hovered && name}
      </Text>
    </group>
  );
};

export default Sphere;
