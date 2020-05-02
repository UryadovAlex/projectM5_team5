import React from 'react';
import styles from './StockItem.module.css';

class StockItem extends React.Component {
    render() {
        const {onSelectStock} = this.props;
        const {symbol, name, price} = this.props.stock;
        let cost = price.toString().split('.');
        return (
                <tr className={styles.tr}
                    onClick={() => {
                    onSelectStock(this.props.stock)
                }}>
                    <td className={styles.ticker}>{symbol}</td>
                    <td className={styles.company}>{name}</td>
                    <td className={styles.priceInteger}>{cost[0]}{cost[1] ? '.' : ''}<span
                        className={styles.priceDecimal}>{cost[1]} $</span></td>
                </tr>
        );
    }
}

export default StockItem;