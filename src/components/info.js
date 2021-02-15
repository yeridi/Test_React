import React from 'react'
//styles
import './styles/info.css'

//images
import IMG1 from '../images/image1.svg'
import IMG2 from '../images/image2.svg'
import IMG3 from '../images/image3.svg'

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
                            <img src={IMG1}></img>
                        </div>
                        <div className="models__info">
                            <h3>Our Projects</h3>
                            <p>Everyone thinks that all the things are the same so you can change this, now you can upload your models Everyone thinks that all the things are the same so you can change this, now you can upload your models</p>
                            <img src={IMG2}></img>
                        </div>
                        <div className="models__info">
                            <h3>Work Hard</h3>
                            <p>Everyone thinks that all the things are the same so you can change this, now you can upload your models Everyone thinks that all the things are the same so you can change this, now you can upload your models</p>
                            <img src={IMG3}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Info