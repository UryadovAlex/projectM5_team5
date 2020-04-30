import React, { Component } from 'react';
import styles from './buy.module.css';

class Buy extends Component {

    clickMe=()=>{
        console.log('clicked')
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
                    <div className={styles.stockName}>Buy Apple</div>
                    {/* section with stock's price, counter and *Buy* button */}
                </section>

                <hr className={styles.hr} />

                <section className={styles.middle}>
                    <div className={styles.currentStockPrice}>
                        247.47$
                    </div>
                    <div className={styles.stockBuyCounter}>
                        <button onClick={this.clickMe} className={styles.minusButton}>
                            -
                        </button>
                        <p className={styles.stocksCount}>10</p>
                        <button onClick={this.clickMe} className={styles.plusButton}>
                            +
                        </button>
                    </div>
                    <div className={styles.totalStocksPrice}>
                        Buy for <span className={styles.span}>2 474.70</span>$
                    </div>
                    <button className={styles.buyButton}>Buy</button>
                </section>
            </main>
        )
    }
}

export default Buy;