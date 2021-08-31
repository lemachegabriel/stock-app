import axios from 'axios'
axios.defaults.withCredentials = true

export const createPortfolio = async (id) => {
    let data
    await axios.post('https://quiet-refuge-47031.herokuapp.com/portfolio/create', {"owner": id} )
    .then((result) => {
        data = result.data
    })
    .catch((err) => {
        console.log(err)
    })
    return data
}
