import React from "react";
import { loginUser } from "../lib/auth";
import { getPrices } from "../lib/getPrices";
import { getTickerName } from "../lib/stocksTicker";

const initialState = {
    open:'',
    close:'', 
    vari:''
}

class StockData extends React.Component {
    state = initialState


    ValidateData = async () => {
        let count=0, ticker =''
        let url = window.location.pathname
        for(let i=0; i<url.length; i++){
            if(url[i] == '/'){
                count ++
            }else if(count == 2){
                ticker += url[i]
            }
        }

        const data = await getPrices(ticker)
        console.log(data.vari)
        if(data){
            this.setState({open: data.open, close: data.close, vari: data.vari})
        }
    }

    componentDidMount(){
        
        this.ValidateData()
    }

    render() {
        return(
            <div>
                <p>
                    {this.state.vari}
                </p>
                <p>
                    {this.state.open}
                </p>
                
            </div>
        )
    }
}
export default StockData