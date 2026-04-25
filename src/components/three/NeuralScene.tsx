import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Points, PointMaterial, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 18;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#22d3ee" size={0.025} sizeAttenuation depthWrite={false} opacity={0.7} />
    </Points>
  );
}

function NeuralNodes() {
  const group = useRef<THREE.Group>(null);
  const nodes = useMemo(() => {
    const arr: { pos: [number, number, number]; color: string }[] = [];
    for (let i = 0; i < 14; i++) {
      const r = 3.2;
      const theta = (i / 14) * Math.PI * 2;
      const y = (Math.random() - 0.5) * 2.5;
      arr.push({
        pos: [Math.cos(theta) * r, y, Math.sin(theta) * r],
        color: i % 2 === 0 ? "#22d3ee" : "#a855f7",
      });
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.elapsedTime * 0.15;
  });

  const lines = useMemo(() => {
    const segs: { a: [number, number, number]; b: [number, number, number] }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      const next = nodes[(i + 1) % nodes.length];
      segs.push({ a: nodes[i].pos, b: next.pos });
      const skip = nodes[(i + 4) % nodes.length];
      segs.push({ a: nodes[i].pos, b: skip.pos });
    }
    return segs;
  }, [nodes]);

  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
          <mesh position={n.pos}>
            <sphereGeometry args={[0.12, 16, 16]} />
            <meshStandardMaterial
              color={n.color}
              emissive={n.color}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        </Float>
      ))}
      {lines.map((l, i) => {
        const points = [new THREE.Vector3(...l.a), new THREE.Vector3(...l.b)];
        const geom = new THREE.BufferGeometry().setFromPoints(points);
        return (
          <line key={i}>
            <primitive object={geom} attach="geometry" />
            <lineBasicMaterial color="#22d3ee" transparent opacity={0.18} />
          </line>
        );
      })}
    </group>
  );
}

function CoreOrb() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.3;
  });
  return (
    <Float speed={1.5} floatIntensity={0.8}>
      <Sphere ref={ref} args={[1.1, 64, 64]}>
        <MeshDistortMaterial
          color="#0ea5e9"
          emissive="#7c3aed"
          emissiveIntensity={0.8}
          distort={0.45}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
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
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.5} color="#22d3ee" />
      <pointLight position={[-5, -3, -5]} intensity={1.2} color="#a855f7" />
      <ParticleField />
      <NeuralNodes />
      <CoreOrb />
    </Canvas>
  );
}