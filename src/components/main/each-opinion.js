import React from 'react'
import '../styles/each-opinion.css'

class EachOpinion extends React.Component{
    render(){
        const {name,image,opinion,date} = this.props;
        return(
            <>
                <div className="each__opinion">
                    <div className="each__opinion__extra">
                        <h5>Name</h5>
                        <h5>{name}</h5>
                        <img src={image}></img>
                    </div>
                   <div className="each__opinion__information">
                        <i>What is his/her opinion ...</i>
                        <p>{opinion}</p>
                   </div>
                   <div className="each__opinion__date">
                       <i>{date}</i>
                   </div>
                </div>
            </>
        )
    }
}
export default EachOpinion