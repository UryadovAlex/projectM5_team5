import React, { Component } from 'react';
import SearchBar from './search-bar/SearchBar';
import StockList from './stock-list/StockList';
import styles from './Stock.module.css';

export default class Stock extends Component {
    render() {
        return (
            <section className={styles.stock}>
                <SearchBar />
                <StockList />
            </section>
        )
    }
}