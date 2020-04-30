import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Logo from './Logo/Logo';
import styles from './Header.module.css';

export default class Header extends Component {

    
    render() {
        const { wrapper } = styles

        return(
            <header className = { wrapper }>
                <Navbar />
                <Logo />
            </header>
        )
    }
}