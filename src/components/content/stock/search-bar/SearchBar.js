import React, { Component } from 'react';
import styles from './SearchBar.module.css';
import searchIcon from './search-icon.png'

export default class SearchBar extends Component {
    render() {
        return (
            <div className={styles.searchContainer}>
                <input
                    onChange={(e) => this.props.getInputValue(e.target.value)}
                    className={styles.searchBar}
                    type="text"
                    name="_search"
                    id="search"
                    placeholder='enter company ticker'
                />
                <img className={styles.icon} src={searchIcon} alt="search-icon" />
            </div>
        )
    }
}