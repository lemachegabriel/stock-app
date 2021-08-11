import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true

export const loginUser = async (email, password) => {
  
  const { data } = await axios.post('https://quiet-refuge-47031.herokuapp.com/api/auth', { email, password }, {withCredentials: true})
  .catch(function (error) {
    if(error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    }})
  
  axios.get('https://quiet-refuge-47031.herokuapp.com/api/cookies', {withCredentials: true})

  console.log(data.token)
  Router.push('posts/first-post')
}