import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
    const meshRef = useRef<THREE.Points>(null);
    const count = 200;

    const [positions, colors] = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        const palette = [
            new THREE.Color('#1a0089'), // primary
            new THREE.Color('#ff5e33'), // secondary  
            new THREE.Color('#b7cf4f'), // accent
        ];

        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

            const color = palette[Math.floor(Math.random() * palette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return [positions, colors];
    }, []);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
        }
    });

    return (
        <points ref={meshRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.1}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
            />
        </points>
    );
}

function FloatingShapes() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (groupRef.current) {
            groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
            groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
        }
    });

    return (
        <group ref={groupRef}>
            <mesh position={[-3, 2, -5]}>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#1a0089" transparent opacity={0.3} />
            </mesh>
            <mesh position={[4, -1, -6]}>
                <octahedronGeometry args={[0.6, 0]} />
                <meshStandardMaterial color="#ff5e33" transparent opacity={0.3} />
            </mesh>
            <mesh position={[-2, -2, -4]}>
                <dodecahedronGeometry args={[0.4, 0]} />
                <meshStandardMaterial color="#b7cf4f" transparent opacity={0.3} />
            </mesh>
            <mesh position={[3, 3, -7]}>
                <tetrahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color="#1a0089" transparent opacity={0.2} />
            </mesh>
        </group>
    );
}

export default function ParticleBackground() {
    return (
        <div className="absolute inset-0 -z-10 overflow-hidden">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 60 }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />
                <Particles />
                <FloatingShapes />
            </Canvas>
        </div>
    );
}
