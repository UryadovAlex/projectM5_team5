import React from 'react';
import StockItem from './stock-item/StockItem';
import styles from './StockList.module.css';

class StockList extends React.Component {

  state = {
    fakeArr: [
      {
        symbol: "SPY",
        name: "SPDR S&P 500",
        price: 289.31,
        exchange: "NYSE Arca"
      },
      {
        symbol: "SPY",
        name: "SPDR S&P 500",
        price: 289.31,
        exchange: "NYSE Arca"
      },
      {
        symbol: "SPY",
        name: "SPDR S&P 500",
        price: 289.31,
        exchange: "NYSE Arca"
      },
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
    let arr = this.state.fakeArr.filter(item => this.searchName(this.props.inputValue, item.symbol));
    return (
      <table className={styles.table}>
        <tbody>
          {
            arr.map((item) => {
              return <StockItem onSelectStock={this.props.onSelectStock} stock={item} key={item.symbol} />
            })
          }
        </tbody>
      </table>
    );
  }
}

export default StockList;