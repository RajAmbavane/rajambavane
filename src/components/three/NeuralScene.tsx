import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function StarField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1200 * 3);
    for (let i = 0; i < 1200; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.y = s.clock.elapsedTime * 0.025;
    ref.current.rotation.x = s.clock.elapsedTime * 0.012;
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#8b5cf6" size={0.02} sizeAttenuation depthWrite={false} opacity={0.55} />
    </Points>
  );
}

function CrystalCore() {
  const inner = useRef<THREE.Mesh>(null);
  const wire = useRef<THREE.Mesh>(null);
  const outer = useRef<THREE.Mesh>(null);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (inner.current) {
      inner.current.rotation.y = t * 0.18;
      inner.current.rotation.x = t * 0.08;
    }
    if (wire.current) {
      wire.current.rotation.y = -t * 0.12;
      wire.current.rotation.z = t * 0.05;
    }
    if (outer.current) {
      outer.current.rotation.y = t * 0.06;
      const pulse = 1 + Math.sin(t * 0.8) * 0.04;
      outer.current.scale.setScalar(pulse);
    }
  });

  return (
    <Float speed={1.1} floatIntensity={0.6} rotationIntensity={0.3}>
      {/* Outer wire shell */}
      <mesh ref={outer}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color="#6d28d9" wireframe transparent opacity={0.18} />
      </mesh>
      {/* Mid wire */}
      <mesh ref={wire}>
        <icosahedronGeometry args={[1.7, 0]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.35} />
      </mesh>
      {/* Inner glowing distorted core */}
      <Icosahedron ref={inner} args={[1.05, 4]}>
        <MeshDistortMaterial
          color="#4c1d95"
          emissive="#7c3aed"
          emissiveIntensity={0.9}
          distort={0.35}
          speed={1.4}
          roughness={0.3}
          metalness={0.85}
        />
      </Icosahedron>
    </Float>
  );
}

export default function NeuralScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.35} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color="#8b5cf6" />
      <pointLight position={[-5, -3, -5]} intensity={1.1} color="#6366f1" />
      <pointLight position={[0, 4, -4]} intensity={0.9} color="#a855f7" />
      <StarField />
      <CrystalCore />
    </Canvas>
  );
}
