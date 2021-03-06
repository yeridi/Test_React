import React from 'react'
import '../styles/header.css'
//images
import img from '../../images/icon.png'

const Header=()=>{
    return(
        <>
            <div className="header">
                <div className="container-header">
                    <div className="logo">
                        <img src={img}></img>
                    </div>
                    <ul>
                        <a href="/inicio">Home</a>
                        <a href="*">Projects</a>
                        <a href="/inicio/opinion">Opinion</a>
                        <a href="*">Extra</a>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Header