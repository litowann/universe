import { MaterialNode, ThreeElements } from "@react-three/fiber";
import { SunShaderMaterial } from "@/materials/SunShaderMaterial";

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
        sunShaderMaterial: MaterialNode<SunShaderMaterial, typeof SunShaderMaterial>;
      }
    }
  }
}
