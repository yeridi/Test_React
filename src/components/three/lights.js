import React from 'react'

const Lights=()=>{
    return(
        <>
            <ambientLight intensity={.3}/>
            <directionalLight
                position={[10,10,5]}
                intensity={1}
            />
            <directionalLight
                position={[0,10,0]}
                intensity={1.5}
            />
            <spotLight
                intensity={1}
                position={[100,0,0]}
            />
        </>
    )
}
export default Lights