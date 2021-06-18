import axios from 'axios'
import { setCookie } from 'nookies';
import Router from 'next/router';

export const loginUser = async (email, password) => {
    const { data } = await axios.post('https://quiet-refuge-47031.herokuapp.com/api/auth', { email, password })
    .catch(function (error) {
        if(error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
        }
    })
    console.log(data.token)

    setCookie(undefined, 'stock.token', data.token, {
        maxAge: 60 * 60 * 24 // 24hrs
    })

    Router.push('posts/first-post')
}
