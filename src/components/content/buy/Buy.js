import React, { Component } from 'react';
import styles from './buy.module.css';
import {addUsersStock, getAllUsersStocks, updateUserDetails, updateUsersStock} from '../../data/data'
import {NavLink} from "react-router-dom";

class Buy extends Component {

    state = {
        amount: 0,
        stock: {},
        balance: 0,
        userStocks: []
    }

    onIncreaseClick = () => {
        this.setState({amount: this.state.amount + 1})
    }

    onDecreaseClick = () => {
        if (this.state.amount !== 0){
            this.setState({amount: this.state.amount - 1})
        }
    }

    buyRequestStock = () => {
        const {userStocks, stock} = this.state;
        const index = userStocks.findIndex(stock => this.state.stock.symbol === stock.symbol)
        if (~index){

            const updateStock = {
                ...userStocks[index],
                amount: userStocks[index].amount + this.state.amount,
                purchasePrice: userStocks[index].purchasePrice + this.state.amount * stock.price
            };

            const {id, ...stockRest} = updateStock;
            updateUsersStock(id, stockRest);
        } else {
            const newStock = {
                ...stock,
                amount: this.state.amount,
                purchasePrice: this.state.amount * stock.price,
                userId: 5
            }
            addUsersStock(newStock);
        }
    }

    onBuyClick = async () => {
        let {amount, balance, stock} = this.state;
        let totalPrice = amount * stock.price
        if(totalPrice <= balance && totalPrice !== 0) {
            this.buyRequestStock();
            balance -= amount * stock.price;
            const userStock = await getAllUsersStocks();
            this.setState({balance, userStock, amount: 0})
            updateUserDetails(balance);
        }
        this.props.updateUserDetails(balance);
    }

    actualInfo = async () => {
        const userStocks = await getAllUsersStocks();
        const { selectedStock, currentBalance } = this.props;
        this.setState({stock: selectedStock, balance: currentBalance, userStocks})
    }

    componentDidMount() {
       this.actualInfo();
    }

    render() {
        
        let cost = this.state.stock.price ? this.state.stock.price.toString().split('.') : '';
        return (
            <main className={styles.main}>
                {/* section with *Back* button and picked stock  */}
                {cost && <div>
                    <section className={styles.header}>
                        <NavLink to="/stock" className={styles.button}>
                            <svg className="bi bi-chevron-left" width="1.6em" height="18px" viewBox="0 0 16 16"
                                 fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z"
                                      clipRule="evenodd"/>
                            </svg>
                            <span>Back</span>
                        </NavLink>
                        <div className={styles.stockName}>Buy {this.state.stock.name}</div>
                        {/* section with stock's price, counter and *Buy* button */}
                        <div className={styles.fake}></div>
                    </section>
                    <section className={styles.middle}>
                        <div className={styles.currentStockPrice}>
                            {cost[0]}{cost[1] ? '.' : ''}<span
                            className={styles.priceDecimal}>{cost[1]} {this.state.stock.price ? ' $' : ''}</span>
                        </div>
                        <div className={styles.stockBuyCounter}>
                            <button onClick={this.onDecreaseClick} className={styles.minusButton}>
                                -
                            </button>
                            <p className={styles.stocksCount}>{this.state.amount}</p>
                            <button onClick={this.onIncreaseClick} className={styles.plusButton}>
                                +
                            </button>
                        </div>
                        <div className={styles.totalStocksPrice}>
                            Buy for <span
                            className={styles.span}>{(this.state.stock.price * this.state.amount).toFixed(2)}</span>$
                        </div>
                        <NavLink to="/buy" className={styles.buyButton} onClick={this.onBuyClick}>Buy</NavLink>
                    </section>
                </div>}
            </main>
        )
    }
}

export default Buy;