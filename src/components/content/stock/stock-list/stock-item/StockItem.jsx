import React from 'react';
import styles from './StockItem.module.css';
import searchIcon from './search-icon.png';

class StockItem extends React.Component {
  state = {
    fakeArr: [
      { ticker: 'NKE', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'AAA', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'BBB', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'CCC', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'DDD', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'FFF', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'QQQ', company: 'Nike Inc.', price: 2490.08 },
    ]
  }
  drawItems = () => {
    const items = [...this.state.fakeArr];
    return items.map(item => {
      let price = item.price.toString().split('.')
      return (
        <div key={item.ticker} className={styles.item}>
          <p className={styles.ticker}>{item.ticker}</p>
          <div>
            <p className={styles.company}>{item.company}</p>
            <p className={styles.priceInteger}>{price[0]}{price[1] ? '.' : ''}<span className={styles.priceDecimal}>{price[1]} $</span></p>
          </div>
        </div>
      );
    })
  }
  render() {
    return (
      <div className={styles.stockContainer}>
        <div className={styles.searchContainer}>
          <input className={styles.searchBar} type="text" name="_search" id="search" placeholder='enter company ticker' />
          <img className={styles.icon} src={searchIcon} alt="search-icon" />
        </div>
        {this.drawItems()}
      </div>
    );
  }
}

export default StockItem;