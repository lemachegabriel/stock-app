import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true
//http://localhost:8000
export const loginUser = async (email, password) => {

  let message = ""
  await axios.post('https://quiet-refuge-47031.herokuapp.com/api/auth', { email, password }, {withCredentials: true})
  .then((result) => {
    Router.push('/home')
  })
  .catch((error) => {
    if(error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      message = error.response.data
    }})
    return message
}
