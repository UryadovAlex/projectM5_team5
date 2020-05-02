import React from "react";
import StockItem from "./stock-item/StockItem";
import { Pagination } from '@material-ui/lab';

class StockList extends React.Component {

    // symbol, name, qty, price, change

    state = {
        pageSize: 20,
        currentPage: 1
      }

    getStockList = () => {
        return this.props.userStock.map(stock => {
            const priceInMarket = this.props.stocks.find(s => stock.symbol === s.symbol).price;
            return <StockItem key={stock.id} {...stock} priceInMarket={priceInMarket} />
        })
    }

    handlePageChange = (event, pageNumber) => {
        this.setState({ currentPage: pageNumber });
    }

    render() {
        const { pageSize, currentPage } = this.state
        return (
            <div>
                <table>
                    <tbody>
                        {this.getStockList().slice(pageSize * (currentPage - 1), pageSize * currentPage)}
                    </tbody>
                </table>
                {
                    this.props.userStock.length > 20 &&
                    <Pagination
                        count={Math.ceil(this.props.userStock.length / this.state.pageSize)}
                        color="primary"
                        onChange={this.handlePageChange} />
                }
            </div>
        );
    }
}

export default StockList;