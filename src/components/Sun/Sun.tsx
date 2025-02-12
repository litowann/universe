import { Sphere } from "@/shared/Sphere";
import { SphereType } from "@/types/types";

const Sun = (props: SphereType) => {
  return (
    <Sphere
      {...props}
      materialColor="#FC9601"
      materialColorHover="#D14009"
      sphereGeometryArgs={[1, 32, 32]}
      name="The Sun"
    />
  );
};

export default Sun;
