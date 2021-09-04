import axios from 'axios'
axios.defaults.withCredentials = true

export const buyStock = async (ticker, price, quantity) => {
    let data
    await axios.post('https://quiet-refuge-47031.herokuapp.com/portfolio/buy', {"ticker": ticker, "price": price, "quantity": quantity})
    .then((result) => {
        data = result.data
        console.log(data)
    })
    .catch((err) => {
        console.log(err)
    })
    return data
}