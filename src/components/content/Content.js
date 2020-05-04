import React from "react";
import { Route } from "react-router-dom";
import Account from "./account/Account";
import styles from './Content.module.css';
import Stock from './stock/Stock';
import Buy from './buy/Buy'


class Content extends React.Component {
    render() {
        const {userStock} = this.props;
        return (
            <div className={styles.wrapper}>
                <Route path='/account'
                       render={() => <Account userStock={userStock} stocks={this.props.stocks}/>}/>
                <Route exact path='/'
                       render={() => <Account userStock={userStock} stocks={this.props.stocks}/>}/>
                <Route path='/stock' render={() => <Stock
                    onSelectStock={this.props.onSelectStock} stocks={this.props.stocks}/>}/>
                <Route path='/buy' render={() => <Buy
                    currentBalance={this.props.currentBalance}
                    selectedStock={this.props.selectedStock}
                    userStock={userStock}
                    updateUserStocks={this.props.updateUserStocks}
                    updateUserDetails={this.props.updateUserDetails}/>}/>
            </div>

        );
    }
}

export default Content;