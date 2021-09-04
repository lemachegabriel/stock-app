import React from "react"
import { buyStock } from "../lib/buyStock"
import { getPrices } from "../lib/getPrices"
import { getPortfolio } from "../lib/userPortfolio";
import { sellStock } from "../lib/sellStock";
import { updateOwnedStock } from "../lib/updateOwnedStock";

const initialState = {
    ticker: '',
    owned: false,
    ownedQuant: 0,
    oldPrice: 0,
    quantity: 1,
    errorMessage: ""
}
class Operation extends React.Component {
    constructor(props) {
        super(props);
        this.state = initialState
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
          [name]: value    
        });
    }

    getUrlTicker = () => {
        let count=0, tickerUrl =''
        let url = window.location.pathname
        for(let i=0; i<url.length; i++){
            if(url[i] == '/'){
                count ++
            }else if(count == 2){
                tickerUrl += url[i]
            }
        }
        this.setState({"ticker": tickerUrl})
        return tickerUrl
    }
    
    upDateStock = async (prices, quantity) => {
        console.log('olaaaaaaaa')
        console.log(this.state.oldPrice)
        const ticker = this.state.ticker
        await updateOwnedStock(ticker, prices, quantity)
    }

    buyFunc = async () => {
        const ticker = this.state.ticker
        const data = await getPrices(ticker)
        const price = data.close, quantity = this.state.quantity * 1
        if(!this.state.owned){
            await buyStock(ticker, price, quantity)
            this.userPortfolio()
        }else{
            this.upDateStock(price, quantity)
            this.userPortfolio()
        }
    } 
    
    sellFunc = async () => {
        if(this.state.owned){
            console.log(this.state.oldPrice)
            const ticker = this.state.ticker
            const data = await getPrices(ticker)
            const price = data.close, quantity = this.state.quantity
            if(this.state.ownedQuant == this.state.quantity){
                await sellStock(ticker ,price ,quantity)
                this.setState(initialState)
                this.userPortfolio()
            }else{
                const quant = quantity * -1
                this.upDateStock(price, quant)
                this.userPortfolio()
            }
        }else{
            this.setState({errorMessage: "Nao tem"})
        }  
    }

    userPortfolio = async () => {
        const ticker = this.getUrlTicker()
        console.log(ticker)
        const portfolio = await getPortfolio()
        const portArr = portfolio["portfolio"]
        for(let i=0; i<portArr.length; i++){
            if(portArr[i]["ticker"] == ticker){
                this.setState({owned: true, ownedQuant: portArr[i]["quantity"], oldPrice: portArr[i]["price"]})
                console.log(portArr[i])
            } 
        }
    }

    componentDidMount(){
        this.getUrlTicker()
        this.userPortfolio()
    }
    render() {
        return(
            <div>
                <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.errorMessage}
                </div>
                <button className="buy button" onClick={this.buyFunc}>comprar</button>
                <button className="sell button" onClick={this.sellFunc}>vender</button>
                <form>
                    <div>
                        <input
                            name="quantity"            
                            type="number"
                            value={this.state.quantity}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default Operation