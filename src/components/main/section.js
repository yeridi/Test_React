import React, { Suspense } from "react";
//img
/* import sectionimg from '../images/section-steve.png' */
//styles
import '../styles/section.css'
//models
import Model from '../three/Model'
/* import Model from './three/Coffre-minecraft' */
import Lights from '../three/lights'
import Floor from '../three/floor'
//three.js
import {Canvas} from 'react-three-fiber'
import {OrbitControls} from '@react-three/drei'

const Section=()=>{

    return(
        <>
            <section className="initial__section">
                <div className="container__section">
                    <div className="title__section">
                        <h1>Hello!</h1>
                        <h2>You can find models 3D here</h2>
                        <h3>What are you looking for?</h3>
                    </div>
                    <div className="img__section">
                        <Canvas
                            colorManagement
                            shadowMap
                            camera={{position:[30,20,-60]}}
                        >
                            <Suspense fallback={null}>
                                <Model/>
                                <Lights/>
                                <Floor/>
                            </Suspense>
                        </Canvas>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section