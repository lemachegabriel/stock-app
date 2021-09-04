import axios from 'axios'
axios.defaults.withCredentials = true

export const getPortfolio = async () => {
    let data
    await axios.get('https://quiet-refuge-47031.herokuapp.com/portfolio/user')
    .then((result) => {
        data = result.data
    })
    .catch((err) => {
        console.log(err)
    })
    return data
}
