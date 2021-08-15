import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true

export const registerUser = async (name, email, password) => {
  
  let message = ''
  await axios.post('https://quiet-refuge-47031.herokuapp.com/api/register', { name, email, password }, {withCredentials: true})
  .then((result) => {
    Router.push('post/first-post')
  })
  .catch((error) => {
    if(error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      message = error.response.data
    }})
  return message
}
