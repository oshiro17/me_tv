import { useThree } from "@react-three/fiber";
import { useSpring, a } from "@react-spring/three";
import { Vector3 } from "three";

type Props = { target: Vector3 | null };

export function CameraRig({ target }: Props) {
  const { camera } = useThree();

  const { pos } = useSpring({
    pos: target ? [target.x * 2.5, target.y * 2.5, target.z * 2.5] : [0, 0, 5],
    config: { mass: 1, tension: 120, friction: 30 },
    onChange: (result) => {
      const [x, y, z] = result.value.pos;
      camera.position.set(x, y, z);
      camera.lookAt(0, 0, 0);
    }
  });

  return <a.group position={pos as any} />;
}