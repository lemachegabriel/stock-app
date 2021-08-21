import { loginUser } from '../lib/auth';
import React from 'react';

const initialState = {
    email: "",
    password: "",
    errorMessage: ""
  };

class LoginForm extends React.Component {
    state = initialState
    
    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
        
    }

    validate = () => {
        let Message = ""
        if(!this.state.password){
            Message = "Senha não pode ser em branco"
        }
        if(!this.state.email.includes("@") || !this.state.email.includes(".")){
            Message = "Insira um email valido"
        }
        if(Message != ""){
            this.setState({errorMessage:Message})
            return false
        }
        return true
    }

    handleSubmit = async event =>{
        let { email, password } = this.state
        
        event.preventDefault()
        const isValid = this.validate()
        if(isValid){
            const data = await loginUser(email, password)
            if(data){
                this.setState({errorMessage:data.error})
                console.log(data.error)
                data.error = this.state.errorMessage
            }
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.errorMessage}
                    </div>
                    <input 
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <input type="password"
                    name="password"
                    placeholder="password"
                    onChange={this.handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default LoginForm