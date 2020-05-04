import React from "react";
import StockItem from "./stock-item/StockItem";
import {Pagination} from '@material-ui/lab';
import styles from './StockList.module.css';
import CircularProgress from "@material-ui/core/CircularProgress";

class StockList extends React.Component {

    // symbol, name, qty, price, change

    state = {
        pageSize: 20,
        currentPage: 1
    }

    getStockList = () => {
        return this.props.userStock.map(stock => {
            const priceInMarket = this.props.stocks.find(s => stock.symbol === s.symbol).price;
            return <StockItem key={stock.id} {...stock} priceInMarket={priceInMarket}/>
        })
    }

    handlePageChange = (event, pageNumber) => {
        this.setState({currentPage: pageNumber});
    }

    render() {
        const {pageSize, currentPage} = this.state
        let list = this.getStockList();
        return (

            <div>
                {list.length ? <div className={styles.table}>
                    {<table>
                        <tbody className={styles.tbody}>
                        {list.slice(pageSize * (currentPage - 1), pageSize * currentPage)}
                        </tbody>
                    </table>}
                    {
                        this.props.userStock.length > 20 &&
                        <div className={styles.paging}>
                            <Pagination
                                count={Math.ceil(this.props.userStock.length / this.state.pageSize)}
                                color="primary"
                                onChange={this.handlePageChange}
                            />
                        </div>
                    }
                </div> : <CircularProgress />}
            </div>

        );
    }
}

export default StockList;