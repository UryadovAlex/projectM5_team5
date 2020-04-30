import React, { Component } from 'react';
import SearchBar from './search-bar/SearchBar';
import StockList from '../stock/stock-list/StockList';

export default class Stock extends Component {
    render() {
        return (
            <section>
                <SearchBar />
                <StockList />
            </section>
        )
    }
}