import React from 'react'; 
import StockItem from './stock-item/StockItem';
import styles from './StockList.module.css';

class StockList extends React.Component {
  render() {
    return (
      <section className={styles.stockListContainer}>
        <StockItem />
      </section>
    );
  }
}

export default StockList;