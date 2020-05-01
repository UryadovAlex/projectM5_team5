import React from "react";
import styles from './Balance.module.css';

class Balance extends React.Component {

    getTotalPrice = () => {
        return this.props.userStock.reduce((total, item) => {
            return item.purchasePrice + total;
        }, 0);
    }

    getMarketPrice = () => {
        return this.props.userStock.reduce((total, el) => {
                return this.props.stocks.find(stock => stock.symbol === el.symbol).price * el.amount + total;
            }
        , 0);
    }

    calculateTotalChange = (ourStockPrice, marketStockPrice) =>{
        return {
            percent: (marketStockPrice - ourStockPrice) * 100/ourStockPrice,
            difference: marketStockPrice - ourStockPrice
        };
    }


    render() {
        const {percent, difference} = this.calculateTotalChange(this.getTotalPrice(), this.getMarketPrice());
        return (
            <div className={styles.balance}>
                <h1>{this.getTotalPrice().toFixed(2)}$</h1>
                {this.props.stocks && <p>{difference.toFixed(2)}$({percent.toFixed(2)} %)</p>}
            </div>
        );
    }
}

export default Balance;