import React from 'react'
//img
import sectionimg from '../images/section-steve.png'
//styles
import './styles/section.css'
const Section=()=>{
    return(
        <>
            <section className="initial__section">
                <div className="container__section">
                    <div className="title__section">
                        <h1>Hello!</h1>
                        <h2>You can find models 3D here</h2>
                        <h3>What are you looking for?</h3>
                    </div>
                    <div className="img__section">
                        <img src={sectionimg}></img>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Section