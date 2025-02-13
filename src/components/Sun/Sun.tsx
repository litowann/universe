import { Sphere } from "@/shared/Sphere";
import { SphereType } from "@/types/types";

export default function Sun(props: SphereType) {
  return (
    <Sphere
      {...props}
      texturePath="/textures/sun.jpg"
      emissiveColor="#FC9601"
      emissiveIntensity={1.0}
      sphereGeometryArgs={[1, 64, 64]}
      name="The Sun"
    />
  );
}
