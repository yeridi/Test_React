import React from 'react'
//styles
import './styles/models.css'


class Models3d extends React.Component{
    render(){
        const {title,image} = this.props
        return(
            <>
                <div className="model">
                    <div className="model__container">
                        <h3>Our Models 3D</h3>
                        <div className="all__model">
                            <div className="each__model">
                                <img src={image}></img>
                                <h4>{title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
export default Models3d