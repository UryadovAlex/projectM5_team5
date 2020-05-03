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
        userDetails: 0,
        selectedStock: {}
    }

    onSelectStock = stock => {
        this.setState({selectedStock: stock});
    }


    async componentDidMount() {
        try {
            Promise.all([getUserDetails(), getAllStocks(), getAllUsersStocks()])
                .then(data => {
                    this.setState({userDetails: data[0].currentBalance, stocks: data[1], userStock: data[2]})
                })
            // // //updateUserDetails(100000);
            // userStock.forEach((stock) => {
            //     deleteUsersStock(stock.id);
            // })

        } catch (e) {
            console.log(e);
        }
    }

    updateUserDetails = balance =>{
       this.setState({userDetails: balance});
    }

    updateUserStocks = userStock => {
        this.setState({userStock : userStock})
    }

    render() {

        return (
            <BrowserRouter>
                <Header />
                <Content
                    currentBalance={this.state.userDetails}
                    selectedStock={this.state.selectedStock}
                    userStock={this.state.userStock}
                    onSelectStock={this.onSelectStock}
                    stocks={this.state.stocks.symbolsList}
                    updateUserDetails={this.updateUserDetails}
                    updateUserStocks={this.updateUserStocks}
                />
                <Footer currentBalance={this.state.userDetails}/>
            </BrowserRouter>
        )
    }
}
