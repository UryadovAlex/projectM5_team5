import React from "react";
import StockItem from "./stock-item/StockItem";

class StockList extends React.Component {
    stockArr = [
        {
            "symbol": "SPY",
            "name": "SPDR S&P 500",
            "price": 293.15,
            "exchange": "NYSE Arca"
        }, {
            "symbol": "CMCSA",
            "name": "Comcast Corporation Class A Common Stock",
            "price": 39.0,
            "exchange": "Nasdaq Global Select"
        }, {
            "symbol": "KMI",
            "name": "Kinder Morgan Inc.",
            "price": 15.71,
            "exchange": "New York Stock Exchange"
        }, {
            "symbol": "INTC",
            "name": "Intel Corporation",
            "price": 61.8,
            "exchange": "Nasdaq Global Select"
        }, {
            "symbol": "INTC",
            "name": "Intel Corporation",
            "price": 61.8,
            "exchange": "Nasdaq Global Select"
        }, {
            "symbol": "SPY",
            "name": "SPDR S&P 500",
            "price": 293.15,
            "exchange": "NYSE Arca"
        }, {
            "symbol": "CMCSA",
            "name": "Comcast Corporation Class A Common Stock",
            "price": 39.0,
            "exchange": "Nasdaq Global Select"
        }, {
            "symbol": "KMI",
            "name": "Kinder Morgan Inc.",
            "price": 15.71,
            "exchange": "New York Stock Exchange"
        }, {
            "symbol": "INTC",
            "name": "Intel Corporation",
            "price": 61.8,
            "exchange": "Nasdaq Global Select"
        }, {
            "symbol": "INTC",
            "name": "Intel Corporation",
            "price": 61.8,
            "exchange": "Nasdaq Global Select"
        },
    ]

    // symbol, name, qty, price, change

    getStockList = () => {
        return this.stockArr
            .reduce((qty, stock) => {
                const foundIndex = qty.findIndex(el => el.symbol === stock.symbol);
                if(~foundIndex) {
                    qty[foundIndex].qty++;
                    return qty;
                }
                return [...qty, {...stock, qty: 1}];
            }, [])
        .map(stock => {
            return <StockItem key={stock.symbol} {...stock}/>
        })
    }

    render() {
        console.log(this.getStockList())
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