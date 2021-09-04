import axios from 'axios'
import Router from 'next/router';

export const logout = async () => {
    await axios.get('https://quiet-refuge-47031.herokuapp.com/api/logout',{ withCredentials: true })
    .then((res) =>{
      console.log(res.data)
      Router.push('/')
    })
} 