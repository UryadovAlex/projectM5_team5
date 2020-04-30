import React, { Component } from 'react';
import logo from './logo.png';
import styles from './Logo.module.css';

export default class Logo extends Component {
    render() {
        const { wrapper } = styles;

        return(
            <div className = { wrapper }>
                <img src = { logo } alt = 'logo' />
            </div>
        )
    }
}