import React from "react";
import Balance from "./balance/Balance";
import StockList from "./stock-list/StockList";

class Account extends React.Component{
    render() {
        return (
            <div>
                <Balance />
                <StockList />
            </div>
        );
    }
}

export default Account;