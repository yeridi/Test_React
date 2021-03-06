import React, {Suspense} from 'react'
import Header from '../main/header'
import Footer from '../main/footer'

//styles
import '../styles/model.css'


//images
import IMG from '../../images/image1.svg'
import IMG2 from '../../images/image2.svg'
import IMG3 from '../../images/image3.svg'
import { getElementError } from '@testing-library/react'

class Model extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data:[{
                "id": 1,
                "title": "Model Animated",
                "image":IMG,
                "description":'El modelado 3D es el proceso de desarrollo de una representación matemática de cualquier objeto tridimensional (ya sea inanimado o vivo) a través de un software especializado. Al producto se le llama modelo 3D. Se puede visualizar como una imagen bidimensional mediante un proceso llamado renderizado 3D o utilizar en una simulación por computadora de fenómenos físicos. El modelo también se puede crear físicamente usando dispositivos de impresión 3D.'
            },{
                "id": 2,
                "title": "Model Map",
                "image":IMG2,
                "description":'El modelado 3D es el proceso de desarrollo de una representación matemática de cualquier objeto tridimensional (ya sea inanimado o vivo) a través de un software especializado. Al producto se le llama modelo 3D. Se puede visualizar como una imagen bidimensional mediante un proceso llamado renderizado 3D o utilizar en una simulación por computadora de fenómenos físicos. El modelo también se puede crear físicamente usando dispositivos de impresión 3D.'
            },{
                "id": 3,
                "title": "Model of people",
                "image":IMG3,
                "description":'El modelado 3D es el proceso de desarrollo de una representación matemática de cualquier objeto tridimensional (ya sea inanimado o vivo) a través de un software especializado. Al producto se le llama modelo 3D. Se puede visualizar como una imagen bidimensional mediante un proceso llamado renderizado 3D o utilizar en una simulación por computadora de fenómenos físicos. El modelo también se puede crear físicamente usando dispositivos de impresión 3D.'
            },{
                "id": 4,
                "title": "Models Random",
                "image":IMG,
                "description":'El modelado 3D es el proceso de desarrollo de una representación matemática de cualquier objeto tridimensional (ya sea inanimado o vivo) a través de un software especializado. Al producto se le llama modelo 3D. Se puede visualizar como una imagen bidimensional mediante un proceso llamado renderizado 3D o utilizar en una simulación por computadora de fenómenos físicos. El modelo también se puede crear físicamente usando dispositivos de impresión 3D.'
            },{
                "id": 5,
                "title": "Model Artistic",
                "image":IMG,
                "description":'El modelado 3D es el proceso de desarrollo de una representación matemática de cualquier objeto tridimensional (ya sea inanimado o vivo) a través de un software especializado. Al producto se le llama modelo 3D. Se puede visualizar como una imagen bidimensional mediante un proceso llamado renderizado 3D o utilizar en una simulación por computadora de fenómenos físicos. El modelo también se puede crear físicamente usando dispositivos de impresión 3D.'
            },{
                "id": 6,
                "title": "Model Importand",
                "image":IMG2,
                "description":'El modelado 3D es el proceso de desarrollo de una representación matemática de cualquier objeto tridimensional (ya sea inanimado o vivo) a través de un software especializado. Al producto se le llama modelo 3D. Se puede visualizar como una imagen bidimensional mediante un proceso llamado renderizado 3D o utilizar en una simulación por computadora de fenómenos físicos. El modelo también se puede crear físicamente usando dispositivos de impresión 3D.'
            }],
        }
    }
    model(model){
        const name = model.title;
        document.getElementById('name').innerHTML= name;

        const description = model.description;
        document.getElementById('description').innerHTML = description;

        const image = document.getElementById('image');
        image.src= model.image
    }

    render(){
        return(
            <>
                <div className="model__header">
                    <Header/>
                </div>
                <div className="model__each__information">
                    <h1>You Can Check all our Models Here</h1>
                    <div className="models__info__container">
                        <div className="container__new__model">
                            <div className="all__model">
                                {this.state.data.map((model)=>{
                                    return(
                                        <>
                                        <div className="mode__information__all">
                                            <img src={model.image}></img>
                                            <h4><a onClick={this.model.bind(this, model)}>{model.title}</a></h4>
                                        </div>
                                        </>
                                        
                                    )
                                })}
                            </div>
                        </div>
                        <div className="model__information">
                            <div className="each__model__information">
                                <h1 id="name">Name of the Model</h1>
                                <img src={IMG} id="image"></img>
                                <p id="description">Description from the model ...</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        )
    }
}
export default Model