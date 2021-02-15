import React from 'react'
//styles

//Componentes
import Header from '../header'
import Section from '../section'
import Info from '../info'
import Example from '../example-model'
import Footer from '../footer'
import App from '../../App'
import Eachmodel from '../each-model'

//images
import IMG from '../../images/image1.svg'
import IMG2 from '../../images/image2.svg'
import IMG3 from '../../images/image3.svg'

class Index extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Model Animated",
                "image":IMG
            },{
                "id": 2,
                "title": "Model Map",
                "image":IMG2
            },{
                "id": 3,
                "title": "Model of people",
                "image":IMG3
            },{
                "id": 4,
                "title": "Models Random",
                "image":IMG
            },{
                "id": 5,
                "title": "Model Artistic",
                "image":IMG
            },{
                "id": 6,
                "title": "Model Importand",
                "image":IMG2
            }]
        }
    }
    render(){
        return(
            <>
                <Header/>
                <Section/>
                <Info/>
                <App/>
                <Example/>
                <div className="model">
                    <div className="model__container">
                        <h3>Our Models 3D</h3>
                        <div className="all__model">
                            {this.state.data.map((model)=>{
                                return(
                                    <Eachmodel
                                        title={model.title}
                                        image={model.image}
                                    />
                                )
                            })}
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}

export default Index