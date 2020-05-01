import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

// import styles from './App.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';
import {getUserDetails, getAllStocks, getAllUsersStocks} from './data/data';


export default class App extends Component {
    state = {
        stocks : {},
        userStock: [],
        userDetails: {},
        selectedStock: {}
    }

    onSelectStock = stock => {
        this.setState({selectedStock: stock});
    }


    async componentDidMount() {
        try {
            const userDetails = await getUserDetails();
            const stocks = await getAllStocks();
            const userStock = await getAllUsersStocks();
            // // //updateUserDetails(100000);
            // userStock.forEach((stock) => {
            //     deleteUsersStock(stock.id);
            // })

            this.setState({userDetails, stocks, userStock})
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Content
                    currentBalance={this.state.userDetails.currentBalance}
                    selectedStock={this.state.selectedStock}
                    userStock={this.state.userStock}
                    onSelectStock={this.onSelectStock}
                    stocks={this.state.stocks.symbolsList}
                />
                <Footer currentBalance={this.state.userDetails.currentBalance}/>
            </BrowserRouter>
        )
    }
}
