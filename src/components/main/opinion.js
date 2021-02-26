import React from 'react'
//styles
import '../styles/opinion.css'

//Componente router dom

import {Link} from 'react-router-dom'

const Opinion=()=>{
    
    return(
        <>
            <div className="opinion">
                <div className="opinion__container">
                    <h1>YOU CAN WRITE YOUR OPINION HERE</h1>
                    <Link to='/inicio/opinion'><button>Write your Opinion</button></Link>
                </div>
            </div>
        </>
    )
}
export default Opinion