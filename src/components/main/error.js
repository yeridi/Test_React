import React from 'react'
import Image from '../../images/404.png'

//style

import '../styles/error.css'

const Error=()=>{
    return(
        <>
            <div className="container__error">
                <h1>Ups!!!</h1>
                <h3>Something is Wrong</h3>
                <img src={Image}></img>
            </div>
        </>
    )
}

export default Error