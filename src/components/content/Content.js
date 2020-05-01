import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Account from "./account/Account";
import styles from './Content.module.css';
import Stock from './stock/Stock.jsx';
import Buy from './buy/Buy'


class Content extends React.Component {
    render() {
        const {userStock} = this.props;
        return (
            <div className={styles.wrapper}>
                <Route exact path='/account' render={() => <Account userStock={userStock} stocks={this.props.stocks}/>}/>
                <Route path='/stock' render={() => <Stock onSelectStock={this.props.onSelectStock}/>}/>
                <Route path='/buy' render={() => <Buy
                    currentBalance={this.props.currentBalance}
                    selectedStock={this.props.selectedStock}
                    userStock={this.props.userStock}/>}/>
            </div>
        );
    }
}

export default Content;