import { useState, useRef } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { Mesh } from "three";

const TestBoxCanvas = (props: ThreeElements["mesh"]) => {
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
            scale={active ? 1.5 : 1}
            onClick={() => setActive(!active)}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hovered ? "hotpink" : "#2f74c0"} />
        </mesh>
    );
};

export default TestBoxCanvas;