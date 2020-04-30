<<<<<<< HEAD
import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import styles from './App.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';



export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Content />
                <Footer />
            </BrowserRouter>
        )
    }
}
=======
import React from 'react';
import StockList from './content/stock/stock-list/StockList';

class App extends React.Component {
  render() {
    return <StockList />
  }
}

export default App;
>>>>>>> Ahmad
