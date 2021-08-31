import axios from 'axios'
axios.defaults.withCredentials = true

export const getPortfolio = async (id) => {
    let data
    await axios.post(`https://quiet-refuge-47031.herokuapp.com/portfolio/user/${id}`)
    .then((result) => {
        data = result.data
    })
    .catch((err) => {
        console.log(err)
    })
    return data
}
