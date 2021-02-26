import React from 'react'
//styles

//Componentes
import Header from '../main/header'
import Section from '../main/section'
import Info from '../main/info'
import Example from '../main/example-model'
import Footer from '../main/footer'
import App from '../../App'
import Eachmodel from '../main/each-model'
import Opinion from '../main/opinion'
import EachOpinion from '../main/each-opinion'

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
            }],
            opinion:[{
                "id":1,
                "name":"Juan Carlos Bodoque",
                "opinion":"My opinion about the page web is so vrazy and very weel, beacuse i never seen something like this. It has some problems beacuse it could be a first test but i enjoyed the page web, i recommend it so much",
                "img":"https://www.lifeder.com/wp-content/uploads/2016/08/tipos-de-felicidad-lifeder-imagen.jpg",
                "date":"01/01/2021"
            },
            {
                "id":2,
                "name":"Tulio Triviño",
                "opinion":"My opinion about the page web is so vrazy and very weel, beacuse i never seen something like this. It has some problems beacuse it could be a first test but i enjoyed the page web, i recommend it so much",
                "img":"https://assets.entrepreneur.com/content/3x2/2000/20160728155134-Depositphotos-8807359-l-2015.jpeg",
                "date":"01/01/2021"
            },
            {
                "id":3,
                "name":"Pedro Juanin Federico",
                "opinion":"My opinion about the page web is so vrazy and very weel, beacuse i never seen something like this. It has some problems beacuse it could be a first test but i enjoyed the page web, i recommend it so much",
                "img":"https://lamenteesmaravillosa.com/wp-content/uploads/2017/05/persona-que-es-feliz.jpg",
                "date":"01/01/2021"
            }
            ]
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
                <Opinion/>
                <div className="opinion"><h2>THEIR OPINIONS</h2> </div>
                <div className="opinion__each"> 
                    {this.state.opinion.map((modelp)=>{
                        return(
                            <EachOpinion
                                name={modelp.name}
                                opinion={modelp.opinion}
                                image={modelp.img}
                                date={modelp.date}
                            />
                        )
                    })}
                </div>
                <Footer/>
            </>
        )
    }
}

export default Index