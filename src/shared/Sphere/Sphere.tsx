import { SphereType } from "@/types/types";
import { useFrame, useLoader } from "@react-three/fiber";
import { useRef, useState } from "react";
import { Mesh, TextureLoader } from "three";
import { Text } from "@react-three/drei";

const Sphere = (props: SphereType) => {
  const {
    materialColor = "#2f74c0",
    materialColorHover = "hotpink",
    texturePath,
    emissiveColor = "#000000",
    emissiveIntensity = 0,
    sphereGeometryArgs = [1, 32, 32],
    name = "My Sphere"
  } = props;

  const meshRef = useRef<Mesh>(null!);

  const texture = useLoader(TextureLoader, texturePath || "");

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
        ref={meshRef}
        scale={active ? 2 : 1}
        onClick={() => setActive(!active)}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <sphereGeometry args={sphereGeometryArgs} />
        <meshStandardMaterial
          map={texture}
          color={
            texture ? "#ffffff" : hovered ? materialColorHover : materialColor
          }
          emissive={emissiveColor}
          emissiveIntensity={emissiveIntensity}
        />
      </mesh>

      <Text
        position={active ? [0, 2.4, 0] : [0, 1.4, 0]}
        fontSize={0.3}
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
