import React from 'react'

const Lights=()=>{
    return(
        <>
            <ambientLight intensity={.4}/>
            <directionalLight
                position={[-3,3,3]}
                intensity={.7}
                castShadow
            />
            <directionalLight
                position={[0,10,0]}
                intensity={1.5}
                castShadow
            />
            <spotLight
                intensity={1}
                position={[100,0,0]}
            />
        </>
    )
}
export default Lights