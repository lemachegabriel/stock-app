import axios from 'axios'
import Router from 'next/router';
axios.defaults.withCredentials = true

export const registerUser = async (name, email, password) => {
  
  const { data } = await axios.post('http://localhost:8000/api/register', { name, email, password }, {withCredentials: true})
  .catch(function (error) {
    if(error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
    }})
  
  console.log(data.token)
  Router.push('posts/first-post')
}
