import React from 'react'
//style
import '../styles/form-option.css'

class Form extends React.Component{
///COMPONENTES CONTROLADOS
    state={}
    
    handleSubmit = e => {
        e.preventDefault() //para no recargar la pagina al presionar en el boton
        console.log(this.state)
    }
    render(){
        const {onChange,form} = this.props
        return(
            <>
                <div className="form">
                    <div className="form__container">
                        <h1>WRITE YOUR COMMENT</h1>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form__element">
                                <label>Name:</label><br/>
                                <input type="text" placeholder="Nickname" name="name" onChange={onChange} value={form.name}/>
                            </div>
                            <div className="form__element">
                                <label>Your Opinion:</label><br/>
                                <input type="text" placeholder="Write your opinion about the page" name="opinion" onChange={onChange} value={form.opinion}/>
                            </div>
                            <div className="form__element">
                                <label>Enter your img:</label><br/>
                                <input type="text" placeholder="Put a URL" name="image" onChange={onChange} value={form.image}/>
                            </div>
                            <button type="submit">Send Your Opinion</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}
export default Form