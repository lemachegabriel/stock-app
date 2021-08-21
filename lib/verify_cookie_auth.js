import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true

export const verify_cookie_auth = async () => {    
    let message = ''
    await axios.get('https://quiet-refuge-47031.herokuapp.com/cookiesGet',{ withCredentials: true })
    .then((res) =>{
      message = res.data
      console.log("message")
      Router.push('/first-post')

    }).catch((err) => {
        message = err.data
        console.log(message)
        Router.push('/')
    })
    return message
}