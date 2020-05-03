import React, { Component } from 'react';
import styles from './Footer.module.css';

export default class Footer extends Component {
    render() {

        const { wrapper, label,fake, amount, cents, footer } = styles;
        let { currentBalance } = this.props;
        currentBalance = currentBalance ? currentBalance.toFixed(2).toString().split('.') : '';
        return (
            <footer className={footer}>
                <div className={wrapper}>
                    <div className={label}>Balance:</div>
                    <div className={amount}>
                        {currentBalance[0]}{currentBalance[1] ? '.' : ''}
                        <span className={cents}>{currentBalance[1]} {currentBalance ? '$' : ''}</span>
                        
                    </div>
                    <div className={fake}>Team5 - [Ahmed, Alexandr, Elnar, Muhammad]</div>
                </div>
            </footer>
        )
    }
}