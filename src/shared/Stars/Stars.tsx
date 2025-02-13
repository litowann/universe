import { Stars as ThreeStars } from "@react-three/drei";

const Stars = () => (
  <group scale={[1, 0.1, 1]}>
    <ThreeStars
      radius={100}
      depth={5}
      count={5000}
      factor={4}
      saturation={0}
      fade
      speed={1}
    />
  </group>
);

export default Stars;
