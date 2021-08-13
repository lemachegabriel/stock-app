import { registerUser } from '../lib/register';
import React from 'react';

class RegisterForm extends React.Component {
    state = {
        name: '',
        email:'',
        password:''
    }
    
    handleChange = event =>{
        this.setState({ [event.target.name]: event.target.value })
    }

    handleSubmit = event =>{
        const { name, email, password } = this.state
        
        event.preventDefault()
        registerUser(name, email, password)
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div><input type="name" 
                    name="name"
                    placeholder="nome"
                    onChange={this.handleChange}
                /></div>
                <div><input type="email" 
                    name="email"
                    placeholder="email"
                    onChange={this.handleChange}
                /></div>
                <div><input type="password"
                    name="password"
                    placeholder="senha"
                    onChange={this.handleChange}
                /></div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default RegisterForm
