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

    onIcreaсeClick = () => {
        this.setState({amount: this.state.amount + 1})
    }

    onDecreaseClick = () => {
        if (this.state.amount !== 0){
            this.setState({amount: this.state.amount - 1})
        }
    }

    buyRequestStock = () => {
        const {userStocks, stock} = this.state;
        console.log(userStocks)
        const index = userStocks.findIndex(stock => this.state.stock.symbol === stock.symbol)
        console.log(index)
        if (~index){

            const updateStock = {
                ...userStocks[index],
                amount: userStocks[index].amount + this.state.amount,
                purchasePrice: userStocks[index].purchasePrice + this.state.amount * stock.price
            };

            const {id, ...stockRest} = updateStock;
            console.log(updateStock, 'update');
            updateUsersStock(id, stockRest);
        } else {
            const newStock = {
                ...stock,
                amount: this.state.amount,
                purchasePrice: this.state.amount * stock.price,
                userId: 5
            }
            addUsersStock(newStock);
            console.log(newStock, 'new')
        }
    }

    onBuyClick = async () => {
        let {amount, balance, stock} = this.state;
        if(amount * stock.price <= balance) {
            this.buyRequestStock();
            balance -= amount * stock.price;
            console.log(balance);
            const userStock = await getAllUsersStocks();
            console.log(userStock);
            this.setState({balance, userStock})
            updateUserDetails(balance);
        }
        console.log(balance);
    }

    actualInfo = async () => {
        const userStocks = await getAllUsersStocks();
        const { selectedStock, currentBalance } = this.props;
        console.log(currentBalance);
        this.setState({stock: selectedStock, balance: currentBalance, userStocks})
    }

    componentDidMount() {
       this.actualInfo();
    }

    render() {
        //console.log(this.createNewStock())
        return (
            <main className={styles.main}>
                {/* section with *Back* button and picked stock  */}
                <section className={styles.header}>
                    <NavLink to="/stock" className={styles.button}>
                        <svg className="bi bi-chevron-left" width="1.6em" height="18px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clipRule="evenodd" />
                        </svg>
                        <span>Back</span>
                    </NavLink>
                    <div className={styles.stockName}>Buy {this.state.stock.name}</div>
                    {/* section with stock's price, counter and *Buy* button */}
                    <div className={styles.fake}></div>
               </section>

                {/* <hr className={styles.hr} /> */}

                <section className={styles.middle}>
                    <div className={styles.currentStockPrice}>
                        {this.state.stock.price}
                    </div>
                    <div className={styles.stockBuyCounter}>
                        <button onClick={this.onDecreaseClick} className={styles.minusButton}>
                            -
                        </button>
                        <p className={styles.stocksCount}>{this.state.amount}</p>
                        <button onClick={this.onIcreaсeClick} className={styles.plusButton}>
                            +
                        </button>
                    </div>
                    <div className={styles.totalStocksPrice}>
                        Buy for <span className={styles.span}>{(this.state.stock.price * this.state.amount).toFixed(2)}</span>$
                    </div>
                    <NavLink to="/stock" onClick={()=>{
                        this.onBuyClick()
                        console.log('buy')
                    }} className={styles.buyButton}>Buy</NavLink>
                </section>
            </main>
        )
    }
}

export default Buy;