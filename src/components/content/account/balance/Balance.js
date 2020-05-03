import React from "react";
import styles from './Balance.module.css';
import inc from "../img/inc.png";
import dec from "../img/dec.png";


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

    calculateTotalChange = (ourStockPrice, marketStockPrice) => {
        return {
            percent: (marketStockPrice - ourStockPrice) * 100 / ourStockPrice,
            difference: marketStockPrice - ourStockPrice
        };
    }


    render() {
        const {percent, difference} = this.calculateTotalChange(this.getTotalPrice(), this.getMarketPrice());
        const plus = difference > 0 ? '+' : '';
        const sign = difference > 0 ? inc : difference < 0 ? dec : '';
        const color = difference > 0 ? styles.green : difference < 0 ? styles.red : '';
        const balance = this.getTotalPrice() ? this.getTotalPrice().toFixed(2).split('.') : '';
        let integerBalance = balance[0] % 1000;
        let zeros = 3 - integerBalance.toString().length;
        let finalString = '';
        for(let i = 0; i < zeros; i++) finalString += '0';
        finalString += integerBalance;
        const thousands = Math.floor(balance[0] / 1000);
        return (
            <div className={styles.balance}>

                {
                    this.props.stocks &&
                    <div>
                        <h1>{plus}{thousands} {finalString}{balance[1] ? '.' : ''}<span className={styles.totalDecimal}>{balance[1]}$</span></h1>
                        <p className={color}>
                            {difference !== 0 && <img src={sign} alt="sign"/>}
                            {difference.toFixed(2)}$({percent.toFixed(2)} %)
                        </p>
                    </div>
                }
            </div>
        );
    }
}

export default Balance;