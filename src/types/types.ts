import { ThreeElements } from "@react-three/fiber";

export type SphereGeometryArgsType = [
  radius?: number,
  widthSegments?: number,
  heightSegments?: number,
  phiStart?: number,
  phiLength?: number,
  thetaStart?: number,
  thetaLength?: number
];

export type SphereType = {
  materialColor?: string;
  materialColorHover?: string;
  sphereGeometryArgs?: SphereGeometryArgsType;
} & ThreeElements["mesh"];
