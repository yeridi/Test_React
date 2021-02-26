import React, {Suspense} from 'react'
//images
/* import IMG from '../images/image1.svg'
import IMG2 from '../images/image2.svg'
import IMG3 from '../images/image3.svg' */
//styles
import '../styles/example.css'
//models 
import Model from '../three/Castle'
import Lights from '../three/lights'
import Floor from '../three/floor'
//three.js
import {Canvas} from 'react-three-fiber'


class Example extends React.Component{

    render(){
        return(
            <>
                <div className="example">
                    <div className="example__container">
                        <h1>CAN YOU CHECK!!!</h1>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>3D Characters?</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <Canvas
                                    colorManagement
                                    shadowMap
                                    camera={{position:[30,30,-60]}}
                                >
                                    <Suspense fallback={null}>
                                        <Model/>
                                        <Lights/>
                                        <Floor/>
                                    </Suspense>
                                </Canvas>
                            </div>
                        </div>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>How Many Models We Have?</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <Canvas
                                    colorManagement
                                    shadowMap
                                    camera={{position:[-4,5,5]}}
                                >
                                    <Suspense fallback={null}>
                                        <Model/>
                                        <Lights/>
                                        <Floor/>
                                    </Suspense>
                                </Canvas>
                            </div>
                        </div>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>3D Characters?</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <Canvas
                                    colorManagement
                                    shadowMap
                                    camera={{position:[30,30,-60]}}
                                >
                                    <Suspense fallback={null}>
                                        <Model/>
                                        <Lights/>
                                        <Floor/>
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