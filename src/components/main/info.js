import React, {Suspense} from 'react'
//styles
import '../styles/info.css'

//images
/* import IMG1 from '../images/image1.svg'
import IMG2 from '../images/image2.svg'
import IMG3 from '../images/image3.svg' */

//three.js
import {Canvas} from 'react-three-fiber'
import {OrbitControls, softShadows, Loader} from '@react-three/drei'
//models
import Model from '../three/Castle'
import Spider from '../three/Spider'
import Lights from '../three/lights'
import Floor from '../three/floor'
import Mutant from '../three/Newmutant'

softShadows();

const Info=()=>{
    return(
        <>
            <div className="information">
                <div className="information__container">
                    <h1>ABOUT MODELS 3D</h1>
                    <div className="container__models">
                        <div className="models__info">
                            <h3>Less is Beteer</h3>
                            <p>Everyone thinks that all the things are the same so you can change this, now you can upload your models Everyone thinks that all the things are the same so you can change this, now you can upload your models</p>
                            <div className="model__info__3d">
                                <Canvas
                                    colorManagement
                                    shadowMap
                                    camera={{position:[-15,30,-35]}}
                                >
                                    <Suspense fallback={null}>
                                        <Spider/>
                                        <Lights/>
                                    </Suspense>
                                </Canvas>
                                <Loader/>
                            </div>
                        </div>
                        <div className="models__info">
                            <h3>Our Projects</h3>
                            <p>Everyone thinks that all the things are the same so you can change this, now you can upload your models Everyone thinks that all the things are the same so you can change this, now you can upload your models</p>
                            <div className="model__info__3d">
                                <Canvas
                                    colorManagement
                                    shadowMap
                                    camera={{position:[20,10,15], fov:70}}
                                >
                                    <Suspense fallback={null}>
                                        <Model/>
                                        <Lights/>
                                        <Floor/>
                                    </Suspense>
                                </Canvas>
                                <Loader/>
                            </div>
                        </div>
                        <div className="models__info">
                            <h3>Work Hard</h3>
                            <p>Everyone thinks that all the things are the same so you can change this, now you can upload your models Everyone thinks that all the things are the same so you can change this, now you can upload your models</p>
                            <div className="model__info__3d">
                                <Canvas
                                    colorManagement
                                    shadowMap
                                    camera={{position:[0,-.1,1.5]}}
                                >
                                    <Suspense fallback={null}>
                                        <Mutant/>
                                        <Lights/>
                                        <Floor/>
                                    </Suspense>
                                </Canvas>
                                <Loader/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info