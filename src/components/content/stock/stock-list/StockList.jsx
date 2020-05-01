import React from 'react';
import StockItem from './stock-item/StockItem';
import styles from './StockList.module.css';
import { Pagination } from '@material-ui/lab';
import { getAllStocks } from '../../../data/data'



class StockList extends React.Component {

  state = {
    arrayStock: [],
    pageSize: 20,
    currentPage: 1
  }
  searchName = (value, name) => {
    name = name.toLowerCase();
    value = value.toLowerCase();
    return !name
      .slice(0, value.length || name.length)
      .indexOf(value || name);
  }

  handlePageChange = (event, pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  async componentDidMount() {
    let arrayStock = await getAllStocks();
    this.setState(
      {
        arrayStock: arrayStock.symbolsList
      }
    )
  }
  render() {
    let arr = this.state.arrayStock.filter(item => this.searchName(this.props.inputValue, item.symbol));
    const { pageSize, currentPage } = this.state
    return (
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <table className={styles.table}>
            <tbody>
              {
                arr.slice(pageSize * (currentPage - 1), pageSize * currentPage)
                    .map(item =>  <StockItem
                        onSelectStock={this.props.onSelectStock}
                        stock={item}
                        key={item.symbol} />)
              }
            </tbody>
          </table>
        </div>
        <Pagination
            className={styles.page}
            count={Math.ceil(this.state.arrayStock.length/this.state.pageSize)}
            color="primary"
            onChange={this.handlePageChange} />
      </div>

    );
  }
}

export default StockList;