import React from 'react';
import StockItem from './stock-item/StockItem';
import styles from './StockList.module.css';

class StockList extends React.Component {

  state = {
    fakeArr: [
      { ticker: 'NKE', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'AAA', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'BBB', company: 'Nike Inc.', price: 2490.08 },
      { ticker: 'CCC', company: 'Nike Inc.', price: 2490.08 }
    ]
  }

  render() {
    return (
        <table className={styles.table}>
          <tbody>
          {
            this.state.fakeArr.map((item) => {
              return <StockItem {...item} key = { item.ticker }/>
            })
          }
          </tbody>
        </table>
    );
  }
}

export default StockList;