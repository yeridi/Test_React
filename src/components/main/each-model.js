import React from 'react'
import '../styles/models.css'

class Eachmodel extends React.Component{
    render(){
        const {title,image} = this.props;

        return(
            <>
                <div className="each__model">
                    <img src={image}></img>
                    <h4>{title}</h4>
                </div>                
            </>
        )
    }
}
export default Eachmodel