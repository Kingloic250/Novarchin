import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, TorusKnot, Environment, MeshDistortMaterial } from '@react-three/drei';
import type { Mesh } from 'three';

function FloatingShape() {
  const knotRef = useRef<Mesh>(null);
  const icoRef = useRef<Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (knotRef.current) {
      knotRef.current.rotation.x = t * 0.18;
      knotRef.current.rotation.y = t * 0.24;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = -t * 0.3;
      icoRef.current.rotation.z = t * 0.12;
    }
  });

  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[4, 6, 4]} intensity={1.2} color="#EDB241" />
      <directionalLight position={[-5, -3, 2]} intensity={0.6} color="#7A1F2B" />

      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.9}>
        <TorusKnot ref={knotRef} args={[1.05, 0.32, 180, 28]}>
          <MeshDistortMaterial
            color="#7A1F2B"
            roughness={0.18}
            metalness={0.85}
            distort={0.22}
            speed={1.4}
          />
        </TorusKnot>
      </Float>

      <Float speed={1.1} rotationIntensity={0.6} floatIntensity={1.4}>
        <Icosahedron ref={icoRef} args={[0.42, 1]} position={[1.7, 1.1, -0.6]}>
          <meshStandardMaterial color="#EDB241" roughness={0.25} metalness={0.7} />
        </Icosahedron>
      </Float>

      <Float speed={1.6} rotationIntensity={0.5} floatIntensity={1.2}>
        <Icosahedron args={[0.26, 0]} position={[-1.8, -0.9, 0.4]}>
          <meshStandardMaterial color="#6B1220" roughness={0.3} metalness={0.6} />
        </Icosahedron>
      </Float>

      <Environment preset="city" />
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <Suspense fallback={null}>
        <FloatingShape />
      </Suspense>
    </Canvas>
  );
}
