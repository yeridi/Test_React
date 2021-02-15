import React from 'react'
//images
import IMG from '../images/image1.svg'
import IMG2 from '../images/image2.svg'
import IMG3 from '../images/image3.svg'
//styles
import './styles/example.css'


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
                                <img src={IMG}></img>
                            </div>
                        </div>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>How Many Models We Have?</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <img src={IMG2}></img>
                            </div>
                        </div>
                        <div className="example__content">
                            <div className="example__text">
                                <h3>3D Characters?</h3>
                                <p>Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here, Our models 3d is make for everyone, just u need be carefull with our terminos and other more, can u read it or have more information about it here beacuse that its imposible.</p>
                            </div>
                            <div className="example__model">
                                <img src={IMG3}></img>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Example