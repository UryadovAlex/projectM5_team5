import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css';


export default class Navbar extends Component {
    
    render() {
        const { item, list, link, active} = styles;
        return(
            <ul className = { list }>
                <li className = { item }><NavLink to = '/account' activeClassName = { active } className = { link }>Account</NavLink></li>
                <li className = { item }><NavLink to = '/stock' activeClassName = { active } className = { link }>Stock</NavLink></li>
            </ul>
        )
    }
}