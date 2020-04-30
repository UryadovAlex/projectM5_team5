import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import styles from './App.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';



export default class App extends Component {

    state = {
        data: [],
        sliced: []
    }

    requestStockList = () => {
        fetch(`https://financialmodelingprep.com/api/v3/company/stock/list`)
            .then(res => res.json())
            .then(res => {
                console.log()
                this.setState(
                    {
                        data: res.symbolsList,
                        sliced: res.symbolsList.slice(0, 10)
                    }
                )
            })
    }

    componentDidMount() {
        this.requestStockList();
    }
    render() {
        console.log(this.state.data);
        return (
            <BrowserRouter>
                <Header />
                <div>
                    <Route exact path='/' render={() => <div>Account</div>} />
                    <Route path='/account' render={() => <div>Account</div>} />
                    <Route path='/stock' render={() => {
                        return <div>
                            {
                                this.state.sliced.map((item, index) => {
                                    return <ul key={index}>
                                        <li>{item.symbol}</li>
                                        <li>{item.name}</li>
                                        <li>{item.price}</li>
                                        <li>{item.exchange}</li>
                                    </ul>
                                })
                            }
                        </div>
                    }} />
                </div>
                <Footer />
            </BrowserRouter>
        )
    }
}
