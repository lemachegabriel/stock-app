import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true

export const loginUser = async (email, password) => {

  let message = ""
  await axios.post('http://localhost:8000/api/auth', { email, password }, {withCredentials: true})
  .then((result) => {
    Router.push('posts/first-post')
  })
  .catch((error) => {
    if(error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      message = error.response.data
    }})
    return message
}
