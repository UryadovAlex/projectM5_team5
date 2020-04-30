import React, { Component } from 'react';
import styles from './buy.module.css';

class Buy extends Component {

    state = {
        amount: 0,
        stock: {},
        balance: 0,
        userStocks: []
    }

    onIcreaseClick = () => {
        this.setState({amount: this.state.amount + 1})
    }

    onDecreaseClick = () => {
        if (this.state.amount !== 0){
            this.setState({amount: this.state.amount - 1})
        }
    }

    createNewStock = () => {
        const {userStocks} = this.state;
        const index = userStocks.findIndex(stock => this.state.stock.symbol === stock.code)
        if (!~index){
            return {...userStocks[index], amount: userStocks[index].amount + this.state.amount}
        }
        return {}
    }

    onBuyClick = () => {
        const {amount, balance, stock} = this.state;
        if(amount * stock.price <= balance) {

        }
    }

    componentDidMount() {
        const { selectedStock, currentBalance, userStock } = this.props;
        this.setState({stock: selectedStock, balance: currentBalance, userStocks: userStock})
    }

    render() {
        return (
            <main >
                {/* section with *Back* button and picked stock  */}
                <section className={styles.header}>
                    <button className={styles.button}>
                        <svg className="bi bi-chevron-left" width="1.6em" height="18px" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 010 .708L5.707 8l5.647 5.646a.5.5 0 01-.708.708l-6-6a.5.5 0 010-.708l6-6a.5.5 0 01.708 0z" clipRule="evenodd" />
                        </svg>
                        <span>Back</span>
                    </button>
                    <div className={styles.stockName}>Buy {this.state.stock.name}</div>
                    {/* section with stock's price, counter and *Buy* button */}
                </section>

                <hr className={styles.hr} />

                <section className={styles.middle}>
                    <div className={styles.currentStockPrice}>
                        {this.state.stock.price}
                    </div>
                    <div className={styles.stockBuyCounter}>
                        <button onClick={this.onDecreaseClick} className={styles.minusButton}>
                            -
                        </button>
                        <p className={styles.stocksCount}>{this.state.amount}</p>
                        <button onClick={this.onIcreaseClick} className={styles.plusButton}>
                            +
                        </button>
                    </div>
                    <div className={styles.totalStocksPrice}>
                        Buy for <span className={styles.span}>{this.state.stock.price * this.state.amount}</span>$
                    </div>
                    <button onclick={this.onBuyClick} className={styles.buyButton}>Buy</button>
                </section>
            </main>
        )
    }
}

export default Buy;