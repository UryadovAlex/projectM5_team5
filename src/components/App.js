import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";

// import styles from './App.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';
import {getUserDetails, getAllStocks, getAllUsersStocks, updateUserDetails, addUsersStock} from './data/data';


export default class App extends Component {
    state = {
        stocks : {},
        userStock: [],
        userDetails: {},
        selectedStock: {}
    }


    async componentDidMount() {
        try {
            const userDetails = await getUserDetails();
            const stocks = await getAllStocks();
            const userStock = await getAllUsersStocks();
            //updateUserDetails(100000);
            //addUsersStock();
            this.setState({userDetails, stocks, userStock})
        } catch (e) {
            console.log(e);
        }

    }

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Content userStock={this.state.userStock}/>
                <Footer />
            </BrowserRouter>
        )
    }
}
