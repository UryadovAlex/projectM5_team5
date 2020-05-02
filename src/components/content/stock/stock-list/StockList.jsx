import React from 'react';
import StockItem from './stock-item/StockItem';
import styles from './StockList.module.css';
import { Pagination } from '@material-ui/lab';
import { getAllStocks } from '../../../data/data';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

class StockList extends React.Component {

  state = {
    arrayStock: [],
    pageSize: 20,
    currentPage: 1
  }
  searchName = (value, name) => {
    name = name.toLowerCase();
    value = value.toLowerCase();
    return name.slice(0, value.length || name.length) === (value || name);
  }

  handlePageChange = (event, pageNumber) => {
    this.setState({ currentPage: pageNumber });
  }

  render() {
    let arr = this.props.stocks ? this.props.stocks.filter(item => this.searchName(this.props.inputValue, item.symbol)) : [];
    const { pageSize, currentPage } = this.state
    return (
      this.props.stocks  ?
        <div className={styles.main}>
          <div className={styles.wrapper}>
            <table className={styles.table}>
              <tbody>
                {
                  arr.slice(pageSize * (currentPage - 1), pageSize * currentPage)
                    .map(item => <StockItem
                      onSelectStock={this.props.onSelectStock}
                      stock={item}
                      key={item.symbol} />)
                }
              </tbody>
            </table>
          </div>
          {this.props.stocks && <Pagination
            className={styles.page}
            count={Math.ceil(arr.length / this.state.pageSize)}
            color="primary"
            onChange={this.handlePageChange} />}
        </div> :
        <div className = {styles.loading}>
          <CircularProgress />
        </div>

    );
  }
}

export default StockList;