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
  searchName = (value, name) => {
    name = name.toLowerCase();
    value = value.toLowerCase();
    return !name
      .slice(0, value.length || name.length)
      .indexOf(value || name);
  }
  render() {
    let arr = this.state.fakeArr.filter(item => this.searchName(this.props.inputValue, item.ticker));
    return (
      <table className={styles.table}>
        <tbody>
          {
            arr.map((item) => {
              return <StockItem {...item} key={item.ticker} />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default StockList;