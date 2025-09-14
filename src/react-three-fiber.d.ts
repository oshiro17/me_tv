/// <reference types="@react-three/fiber" />
/// <reference types="three" />

declare namespace JSX {
    interface IntrinsicElements {
      primitive: any;
      ambientLight: any;
      directionalLight: any;
      meshStandardMaterial: any;
    }
  }