import axios from 'axios'

export const getTickerName = async () =>{
    let data = ''
    await axios.get('https://quiet-refuge-47031.herokuapp.com/quotes/stock', {withCredentials:true})
    .then((res) => {
        data = res.data
        //console.log(data)
    }).catch((err) => {
        data = err.data
        console.log(data)
    })
    return data
}