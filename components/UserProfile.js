import  {verify_cookie_auth}  from "../lib/verify_cookie_auth";
import React from "react";

const initialState = {
    name:'',
    email:'',
    auth:''
}
class UserInfo extends React.Component{
    state = initialState
    
    validate = async () => {
        const data = await verify_cookie_auth()
        if(data){
            this.setState({name: data['user']['name']})
            console.log(data['user']['name'])
            return true
        }else{
            console.log(data)
            return false
        }        
    } 
    componentDidMount(){
        this.validate()
    }

    render() {
            return(
                <div>
                    <button className={'teste'} onClick={this.validate}>get</button>
                    {this.state.name}
                </div>
            )
        }
    
}
export default UserInfo