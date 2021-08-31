import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true

export const verify_cookie_auth = async () => {    
    let message = ''
    await axios.get('https://quiet-refuge-47031.herokuapp.com/api/cookiesGet',{ withCredentials: true })
    .then((res) =>{
      message = res.data
    }).catch((err) => {
        message = err.data
        console.log(message)
        Router.push('/')
    })
    return message
}