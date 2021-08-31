import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true

//http://localhost:8000

export const registerUser = async (name, email, password) => {

  let message, errorStatus
  await axios.post('https://quiet-refuge-47031.herokuapp.com/api/register', { name, email, password }, {withCredentials: true})
  .then((result) => {
    message = result.data
    Router.push('/home')
  })
  .catch((error) => {
    if(error.response) {
      message = error.response.data
      errorStatus = error.response.status
    }})
  return {message, errorStatus }
}
