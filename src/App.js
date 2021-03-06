import React, {Suspense} from 'react'
//three
import {Canvas} from 'react-three-fiber'
import {OrbitControls} from '@react-three/drei'
//Estyles
import './App.css';
//images
/* import IMG from'./images/adventure.png' */
//models
import Fox from './components/three/Fox'
import Lights from './components/three/lights'
import Floor from './components/three/floor'

function App() {
  return (
    <div className="App">
      <div className="our__animation">
        <div className="container__animation">
          <div className="animation__model">
          <Canvas
              colorManagement
              shadowMap
              camera={{position:[15,28,70]}}
          >
            <Suspense fallback={null}>
              <Fox/>
              <Lights/>
            </Suspense>
          </Canvas>
          </div>
          <h1>ABOUT OUR MODEL 3D</h1>
          <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible,</p>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default App;
