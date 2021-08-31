import axios from 'axios'
axios.defaults.withCredentials = true
//http://localhost:8000
export const getPrices = async (ticker) => {

  let message = ""
  await axios.post('https://quiet-refuge-47031.herokuapp.com/api/datav', { "TICKER": ticker })
  .then((result) => {
    message = result.data
  })
  .catch((error) => {
    if(error.response) {
      console.log(error.response.data);
      console.log(error.response.status);
      message = error.response.data
    }})
    return message
}
