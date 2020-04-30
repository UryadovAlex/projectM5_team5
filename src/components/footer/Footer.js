import React, { Component } from 'react';
import styles from './Footer.module.css';

export default class Footer extends Component {
    render() {

        const { wrapper, label, amount, cents, footer } = styles;
        return (
            <footer className={ footer }>
                <div className={wrapper}>
                    <div className={label}>Balance:</div>
                    <div className={amount}>568.<span className={cents}>76$</span></div>
                </div>
            </footer>
        )
    }
}