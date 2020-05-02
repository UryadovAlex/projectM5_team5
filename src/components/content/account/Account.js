import React from "react";
import Balance from "./balance/Balance";
import StockList from "./stock-list/StockList";

class Account extends React.Component{
    render() {
        const {userStock, stocks} = this.props;
        return (
            <div>
                <Balance userStock={userStock} stocks={stocks}/>
                <StockList userStock={userStock} stocks={stocks}/>
            </div>
        );
    }
}

export default Account;