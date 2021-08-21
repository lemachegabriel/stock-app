import axios from 'axios'
import Router from 'next/router';

export const logout = async () => {
    await axios.get('http://localhost:8000/api/logout',{ withCredentials: true })
    .then((res) =>{
      console.log(res.data)
      Router.push('/')
    })
}