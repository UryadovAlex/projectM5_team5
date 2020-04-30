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
