import { MeshProps } from "@react-three/fiber";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      mesh: MeshProps;
      planeGeometry: any;
      shaderMaterial: any;
      meshBasicMaterial: any;
    }
  }
}
