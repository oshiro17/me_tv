import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Pin } from "./Pin";
import { CameraRig } from "./CameraRig";

// 緯度経度 → XYZ 座標変換
const toXYZ = (lat: number, lon: number, radius: number) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);
  return new THREE.Vector3(x, y, z);
};

export default function Globe() {
  const [target, setTarget] = useState<THREE.Vector3 | null>(null);

  // Generate 30 random positions on the globe surface
  const randomPins = Array.from({ length: 30 }, () => {
    const lat = Math.random() * 180 - 90; // -90 to 90
    const lon = Math.random() * 360 - 180; // -180 to 180
    return toXYZ(lat, lon, 1.01);
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 5] }}
      style={{ width: "100vw", height: "100vh", background: "black" }}
    >
      {/* カメラワープ制御 */}
      <CameraRig target={target} />

      {/* 星空背景 */}
      <Stars radius={300} depth={60} count={20000} factor={7} />

      {/* 地球本体 */}
      <Sphere args={[1, 64, 64]}>
        <meshStandardMaterial
          map={new THREE.TextureLoader().load(
            "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
          )}
        />
      </Sphere>

      {/* ピン：東京（固定、クリックでワープ） */}
      <Pin
        position={toXYZ(35.6895, 139.6917, 1.01)}
        color="cyan"
        onClick={() => setTarget(toXYZ(35.6895, 139.6917, 1.01))}
      />

      {/* ピン：ニューヨーク（ドラッグで動かせる） */}
      <Pin
        position={toXYZ(40.7128, -74.006, 1.01)}
        color="magenta"
        onMove={(newPos) => console.log("ニューヨークの新しい位置:", newPos)}
      />

      {/* 30個の小さなhana.png画像をランダムに配置 */}
      {randomPins.map((pos, idx) => (
        <mesh
          key={idx}
          position={pos}
          scale={[0.1, 0.1, 0.1]}
          onClick={() => {
            const answer = window.confirm("ここにループしますか？");
            if (answer) {
              console.log("はい：ループ開始！");
            } else {
              console.log("いいえ：キャンセル");
            }
          }}
        >
          <planeGeometry args={[1, 1]} />
          <meshBasicMaterial
            map={new THREE.TextureLoader().load("/hana.png")}
            transparent
          />
        </mesh>
      ))}

      {/* 照明 */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 3, 5]} intensity={1} />

      {/* マウス操作 */}
      <OrbitControls />
    </Canvas>
  );
}