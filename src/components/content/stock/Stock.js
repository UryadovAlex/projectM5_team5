import React, { Component } from 'react';
import SearchBar from './search-bar/SearchBar';
import StockList from './stock-list/StockList';
import styles from './Stock.module.css';

export default class Stock extends Component {
    state = {
        inputValue: ''
    }
    getInputValue = (value) => {
        this.setState({inputValue: value})
    }
    render() {
        return (
            <section className={styles.stock}>
                <SearchBar inputValue={this.state.inputValue} getInputValue={this.getInputValue} />
                <StockList
                    inputValue={this.state.inputValue}
                    onSelectStock={this.props.onSelectStock}
                    stocks={this.props.stocks}
                />
            </section>
        )
    }
}