import React, { useEffect, useRef } from 'react'
import { useGraph, useThree } from '@react-three/fiber'
import { useAnimations, useFBX, useGLTF, useTexture } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'

export function OfficeComputer(props) {
  const {viewport} = useThree()
  const { scene } = useGLTF('/models/optimized-office.glb')
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { nodes, materials } = useGraph(clone)
  const group = useRef();
  const {animations: typeAnimations} = useFBX('/animations/Typing.fbx');
  typeAnimations[0].name = 'Typing';
  const { actions } = useAnimations(typeAnimations, group);

  useEffect(() => {
    actions["Typing"].reset().play()
  })

  const picture = '/images/personalized.jpg';
  const imageTexture = useTexture(picture, (texture) => {
    // 1. Stop Tiling: Set wrapping mode to prevent repetition
    texture.wrapS = texture.wrapT = THREE.ClampToEdgeWrapping;

    texture.center.set(0.5, 0.5); 
    texture.repeat.set(2, 2)
    texture.offset.set(0.3, 0.2)
    
    // 2. Fix Orientation: Rotate the texture map by 90 degrees (π/2)
    texture.rotation = Math.PI / 2; 
    
    // 3. Prevent Vertical Flip: Disable default vertical flip
    texture.flipY = false; 
    
    // Ensure update to the texture is applied
    texture.needsUpdate = true;
  });

  return (
    <group scale={viewport.width / 200} {...props} dispose={null}>
      <group ref={group} position={[75.002, -5, 4.051]} rotation={[-1.503, 0, -1.6]} scale={80.877}>
          <primitive object={nodes.Hips} />
          <skinnedMesh geometry={nodes.Wolf3D_Body.geometry} material={materials.Wolf3D_Body} skeleton={nodes.Wolf3D_Body.skeleton} frustumCulled={false} />
          <skinnedMesh geometry={nodes.Wolf3D_Glasses.geometry} material={materials.Wolf3D_Glasses} skeleton={nodes.Wolf3D_Glasses.skeleton} frustumCulled={false} />
          <skinnedMesh geometry={nodes.Wolf3D_Hair.geometry} material={materials.Wolf3D_Hair} skeleton={nodes.Wolf3D_Hair.skeleton} frustumCulled={false} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Bottom.geometry} material={materials.Wolf3D_Outfit_Bottom} skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton} frustumCulled={false} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Footwear.geometry} material={materials.Wolf3D_Outfit_Footwear} skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton} frustumCulled={false} />
          <skinnedMesh geometry={nodes.Wolf3D_Outfit_Top.geometry} material={materials.Wolf3D_Outfit_Top} skeleton={nodes.Wolf3D_Outfit_Top.skeleton} frustumCulled={false} />
          <skinnedMesh name="EyeLeft" geometry={nodes.EyeLeft.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeLeft.skeleton} morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary} morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences} frustumCulled={false} />
          <skinnedMesh name="EyeRight" geometry={nodes.EyeRight.geometry} material={materials.Wolf3D_Eye} skeleton={nodes.EyeRight.skeleton} morphTargetDictionary={nodes.EyeRight.morphTargetDictionary} morphTargetInfluences={nodes.EyeRight.morphTargetInfluences} frustumCulled={false} />
          <skinnedMesh name="Wolf3D_Head" geometry={nodes.Wolf3D_Head.geometry} material={materials.Wolf3D_Skin} skeleton={nodes.Wolf3D_Head.skeleton} morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences} frustumCulled={false} />
          <skinnedMesh name="Wolf3D_Teeth" geometry={nodes.Wolf3D_Teeth.geometry} material={materials.Wolf3D_Teeth} skeleton={nodes.Wolf3D_Teeth.skeleton} morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary} morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences} frustumCulled={false} />
      </group>
      <mesh geometry={nodes.Cube.geometry} position={[18.679, 62.9, 87.003]} scale={[1.73, 11.184, 10.922]}>
        <meshStandardMaterial map={imageTexture} />
      </mesh>
      <group position={[40.574, 19.542, 8.922]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-36.625, -67.542, -31.299]} scale={[1.414, 1, 1.702]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353001.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 0.892, -26.24]} scale={[0.074, 2.084, 0.257]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353004.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 36.798, -18.901]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353002.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 0.892, -14.175]} scale={[0.074, 1.859, 0.727]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353003.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 0.892, 12.469]} scale={[0.074, 2.084, 0.257]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353005.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 30.411, -18.901]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353006.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, -35.496, -18.901]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353007.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, -29.109, -18.901]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353008.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, -35.496, 7.242]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353009.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, -29.109, 7.242]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353010.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 30.169, 7.242]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353011.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 36.556, 7.242]} scale={[0.044, 0.063, 0.212]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353012.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 43.392, 3.392]} scale={[0.044, 0.217, 0.076]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353013.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, 43.392, -11.557]} scale={[0.044, 0.217, 0.076]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353014.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, -41.96, -11.557]} scale={[0.044, 0.217, 0.076]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353015.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-60.47, -41.96, 3.392]} scale={[0.044, 0.217, 0.076]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353017.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-21.89, 0, 29.697]} scale={[1.414, 1.378, 0.174]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353023.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[30.497, 72.436, -31.299]} scale={[1.933, 0.823, 1.189]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353024.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[49.384, 50.312, -25.213]} scale={[0.754, 0.448, 1.275]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353025.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[49.384, 50.312, -10.65]} scale={[0.754, 0.448, 1.275]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353026.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[11.136, 50.312, -10.65]} scale={[0.754, 0.448, 1.275]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353027.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[11.136, 50.312, -25.213]} scale={[0.754, 0.448, 1.275]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353028.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-36.625, 68.886, -31.299]} scale={[1.414, 1, 1.702]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353016.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-53.04, -68.976, 14.92]} scale={[0.247, 0.247, 0.715]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353018.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-53.04, 71.314, 14.92]} scale={[0.247, 0.247, 0.715]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353019.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-29.405, 80.502, 14.92]} scale={[0.247, 0.247, 0.715]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353020.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-29.405, -81.085, 14.92]} scale={[0.247, 0.247, 0.715]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353021.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-29.405, -53.294, 14.92]} scale={[0.247, 0.247, 0.715]} />
        <mesh geometry={nodes.MaterialFBXASC032FBXASC0353022.geometry} material={materials.MaterialFBXASC032FBXASC0353} position={[-29.405, 54.493, 14.92]} scale={[0.247, 0.247, 0.715]} />
      </group>
      <group position={[55.022, 35.481, 10.318]} rotation={[-Math.PI / 2, 0, 0]} scale={1.565}>
        <group position={[-0.223, -0.54, -8.012]} scale={[0.284, 0.322, 0.284]}>
          <mesh geometry={nodes.MaterialFBXASC032FBXASC03538.geometry} material={materials.MaterialFBXASC032FBXASC03538} position={[39.736, 0, 0]} />
        </group>
        <group position={[14.432, -0.528, -6.251]} rotation={[0, 0.105, 0]} scale={[0.06, 0.367, 4.143]}>
          <mesh geometry={nodes.MaterialFBXASC032FBXASC03538003.geometry} material={materials.MaterialFBXASC032FBXASC03538} position={[188.303, 0, 0.285]} />
        </group>
        <group position={[-1.664, 15.271, 5.316]} scale={0.444}>
          <mesh geometry={nodes.MaterialFBXASC032FBXASC03538002.geometry} material={materials.MaterialFBXASC032FBXASC03538} position={[25.483, 0, 0]} />
        </group>
        <group position={[-1.664, -17.269, 5.316]} rotation={[-Math.PI, 0, -Math.PI]} scale={-0.444}>
          <mesh geometry={nodes.MaterialFBXASC032FBXASC03538001.geometry} material={materials.MaterialFBXASC032FBXASC03538} position={[25.483, 0, 0]} />
        </group>
        <group position={[20.742, 0.194, 5.401]} rotation={[0, -1.192, 0]} scale={[0.405, 0.405, 0.17]}>
          <mesh geometry={nodes.MaterialFBXASC032FBXASC03538004.geometry} material={materials.MaterialFBXASC032FBXASC03538} position={[10.339, 0, -61.666]} />
        </group>
      </group>
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0354.geometry} material={materials.MaterialFBXASC032FBXASC0354} position={[-22.588, 88.167, 28.596]} rotation={[-Math.PI / 2, -0.256, -Math.PI / 2]} scale={[0.261, 0.458, 0.458]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1002.geometry} material={materials.MaterialFBXASC032FBXASC0354_ncl1_1} position={[6.864, 51.118, -34.455]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[0.514, 1.18, 0.514]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0352.geometry} material={materials.MaterialFBXASC032FBXASC0352} position={[76.12, 26.409, -66.145]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.514, 0.514, 0.363]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1001.geometry} material={materials.MaterialFBXASC032FBXASC0354_ncl1_1} position={[14.69, 51.403, 11.988]} rotation={[-Math.PI / 2, 0.147, -Math.PI]} scale={[0.53, 0.715, 0.715]} />
      <mesh geometry={nodes.MaterialFBXASC032FBXASC0354_ncl1_1.geometry} material={materials.MaterialFBXASC032FBXASC0354_ncl1_1} position={[16.037, 50.997, -18.414]} rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[0.203, 0.243, 0.136]} />
    </group>
  )
}

useGLTF.preload('/models/optimized-office.glb')
