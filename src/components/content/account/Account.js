import React from "react";
import Balance from "./balance/Balance";
import StockList from "./stock-list/StockList";

class Account extends React.Component{
    render() {
        const {userStock} = this.props;
        return (
            <div>
                <Balance />
                <StockList userStock={userStock}/>
            </div>
        );
    }
}

export default Account;