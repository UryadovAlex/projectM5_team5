import React from 'react';
import styles from './StockItem.module.css';
import {NavLink} from 'react-router-dom';

class StockItem extends React.Component {
    render() {
        const {stock, onSelectStock} = this.props;
        const {symbol, name, price} = this.props.stock;
        let cost = price.toString().split('.');
        return (
            <NavLink to="/buy" className = {styles.link}>
                <tr onClick={() => {
                    onSelectStock(this.props.stock);
                }} className={styles.row}>
                    <td className={styles.ticker}>{symbol}</td>
                    <td className={styles.company}>{name}</td>
                    <td className={styles.priceInteger}>{cost[0]}{cost[1] ? '.' : ''}<span
                        className={styles.priceDecimal}>{cost[1]} $</span></td>
                </tr>
            </NavLink>
        );
    }
}

export default StockItem;