import React, { useEffect } from 'react'
import { Environment, Float, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'

const TechIcon = ({model}) => {
    // Note: useGLTF is a hook and should only be called once per render.
    // It's typically safe if modelPath doesn't change frequently.
    const scene = useGLTF(model.modelPath)
    useEffect(() => {
        if(model.name === 'Interactive Developer') {
            scene.scene.traverse((child) => {
                if(child.isMesh && child.name === 'Object_5') {
                    child.material = new THREE.MeshStandardMaterial({color: 'white'})
                }
            })
        }
    })
  return (
    <Canvas>
      {/* ISSUE FIX: The model was likely too dark. 
        We are removing the weak ambient light and adding a strong directional light 
        to ensure the PBR materials are correctly illuminated. 
      */}
      
      {/* 1. Add a primary directional light (like the sun) */}
      <OrbitControls enableZoom={false} />
      <directionalLight position={[10, 10, 5]} intensity={2.5} />
      
      {/* 2. Add soft fill light (optional) */}
      <hemisphereLight intensity={0.5} groundColor="black" />

      {/* 3. Use an environment map that works well with directional lighting */}
      <Environment preset='city' />

      <Float speed={5.5} rotationIntensity={0.5} floatIntensity={0.9}>
        <group scale={model.scale} rotation={model.rotation}>
            <primitive object={scene.scene} />
        </group>
      </Float>
    </Canvas>
  )
}

export default TechIcon
