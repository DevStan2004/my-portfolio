import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Computer } from './Computer'
import { OfficeComputer } from '../OfficeComputer'
import { Avatar } from '../Avatar'

const ContactRoom = () => {
  return (
    <Canvas className='bg-[#686868]' camera={{ position: [0, 10, 10], fov: 45, near: 0.1, far: 40 }} shadows >
      <ambientLight intensity={1} color="#fff4e6" />
      <directionalLight 
        position={[5, 5, 3]} 
        intensity={1} 
        castShadow // 👈 Now casting shadows
        shadow-mapSize={[2048, 2048]} // Better quality
        shadow-camera-left={-10}    // Ensure the scene is in the shadow map
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-near={0.1}
        shadow-camera-far={20}
        color="#fff4e6"
        />

        <spotLight
        position={[0, 8, 0]} // Recommending [0, 8, 0] from the previous answer for top-down
        color='#ffffffff'
        angle={1.5}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={[2048, 2048]} // Better quality
        shadow-camera-far={20}
        />
      <OrbitControls enableZoom={false} enablePan={false} minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI /2} />
      <group scale={1.3} castShadow>
        <group scale={0.03} position={[0, -1.5, -2]} rotation={[0, -Math.PI /2, 0]}>
            <OfficeComputer />
        </group>
        <group rotation={[Math.PI / 2, -Math.PI / 1, 0]} position={[-0.5, -1.49, 0]} scale={2.3}>
            <Avatar />
        </group>
      </group>
    <group scale={1}>
        <mesh receiveShadow position={[0, -3, 0]} rotation={[-Math.PI / 2, 0, 0]} >
            <planeGeometry args={[20, 20]} />
            <meshStandardMaterial color='#a46b2d' />
        </mesh>
    </group>

    </Canvas>
  )
}

export default ContactRoom
