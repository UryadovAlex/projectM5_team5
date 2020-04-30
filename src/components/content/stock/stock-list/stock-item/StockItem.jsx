import React from 'react';
import styles from './StockItem.module.css';

class StockItem extends React.Component {
  render() {
    console.log(this.props);
    const { ticker, company, price } = this.props;
    let cost = price.toString().split('.');
    return (
      <tr className={styles.row}>
        <td className={styles.ticker}>{ ticker }</td>
        <td className={styles.company}>{ company }</td>
        <td className={styles.priceInteger}>{cost[0]}{cost[1] ? '.' : ''}<span className={styles.priceDecimal}>{cost[1]} $</span></td>
      </tr>
    );
  }
}

export default StockItem;