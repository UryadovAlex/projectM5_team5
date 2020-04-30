import React from "react";
import StockItem from "./stock-item/StockItem";

class StockList extends React.Component {

    // symbol, name, qty, price, change

    getStockList = () => {
        return this.props.userStock.map(stock => {
            return <StockItem key={stock.id} {...stock}/>
        })
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        {this.getStockList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StockList;