import React from 'react'
//components
import Form from '../main/form-opinion'
import EachOpinion from '../main/each-opinion'
//style
import '../styles/opinionAll.css'

class Opinion extends React.Component{
    state={
        form:{
            name:'',
            image:'',
            opinion:'',
            date:'',
        }
    }
    handleChange = e =>{ //para usar ek componente en "funcionamiento"
/*         console.log(`${e.target.name} : ${e.target.value}`) */
        /* let partialState={}
        partialState[e.target.name] = e.target.value;
        this.setState(partialState) */
        this.setState({
            form:{
                ...this.state.form, //que mantenga lo que tenia o poner nuevo (para no sobrescribir)
                [e.target.name] : e.target.value
            }
        })
    }
    render(){
        return(
            <>
                <div className="opinion__all">
                    <div className="opinion__all__container">
                        <div className="example__opinion">
                            <EachOpinion
                                {...this.state.form}
                            />
                        </div>
                        <div className="form__opinion">
                            <Form 
                                onChange={this.handleChange}
                                form={this.state.form}
                            />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Opinion