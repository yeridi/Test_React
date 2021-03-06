import React, {Suspense, useRef} from 'react'
//images
/* import IMG from '../images/image1.svg'
import IMG2 from '../images/image2.svg'
import IMG3 from '../images/image3.svg' */
//styles
import '../styles/example.css'
//models 
import Soldier from '../three/Soldier'
import Lights from '../three/lights'
import Floor from '../three/floor'
//three.js
import {Canvas, useFrame} from 'react-three-fiber'
import {OrbitControls, softShadows, MeshWobbleMaterial} from '@react-three/drei'

softShadows();
const Box = ({color, args}) =>{
    
    const mesh = useRef(null);
    useFrame(()=>{mesh.current.rotation.x = mesh.current.rotation.y +=0.01})

    return (
        <mesh castShadow ref={mesh}>
            <boxBufferGeometry attach='geometry'args={args}/>
            <MeshWobbleMaterial attach="material" color={color} speed={6} factor={.1}/>
        </mesh>
    )
}

class Example extends React.Component{

    render(){
        return(
            <>
                <div className="example">
                    <div className="example__container">
                        <h1>CAN YOU CHECK!!!</h1>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>Model in 3D?</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <Canvas shadowMap colorManagement camera={{position:[-5,2,10], fov:50}}>
                                    <ambientLight intensity={.3}/>
                                    <directionalLight castShadow position={[0,10,0]} intensity={1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10}/>
                                    <pointLight position={[-10,0,-20]} intensity={.5}/>
                                    <pointLight position={[0,-10,0]} intensity={1.5}/>
                                    <group>
                                        <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-3,0]}>
                                            <planeBufferGeometry attach="geometry" args={[100,100]}/>
                                            <shadowMaterial attach="material" opacity={0.5}/>
                                        </mesh>
                                    </group>
                                    <Box color='pink' args={[3,3,3]}/>
                                </Canvas>
                            </div>
                        </div>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>Can We Modify the Models?</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <Canvas shadowMap colorManagement camera={{position:[-5,2,10], fov:50}}>
                                    <ambientLight intensity={.3}/>
                                    <directionalLight castShadow position={[0,10,0]} intensity={1} shadow-mapSize-width={1024} shadow-mapSize-height={1024} shadow-camera-far={50} shadow-camera-left={-10} shadow-camera-right={10} shadow-camera-top={10} shadow-camera-bottom={-10}/>
                                    <pointLight position={[-10,0,-20]} intensity={.5}/>
                                    <pointLight position={[0,-10,0]} intensity={1.5}/>
                                    <group>
                                        <mesh receiveShadow rotation={[-Math.PI/2,0,0]} position={[0,-3,0]}>
                                            <planeBufferGeometry attach="geometry" args={[100,100]}/>
                                            <shadowMaterial attach="material" opacity={0.5}/>
                                        </mesh>
                                    </group>
                                    <Box color="lughtblue" args={[1,2,3]}/>
                                </Canvas>
                            </div>
                        </div>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>Animation in Characters in 3D</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <Canvas
                                    colorManagement
                                    shadowMap
                                    camera={{position:[-1,.6,1]}}
                                >
                                    <Suspense fallback={null}>
                                        <Soldier/>
                                        <Lights/>
                                    </Suspense>
                                </Canvas>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Example