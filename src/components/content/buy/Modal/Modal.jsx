import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import styles from './Modal.module.css'
import { NavLink } from "react-router-dom";

export default class Modal extends Component {
    render() {
        return (
            this.props.name !== undefined ?
            <Dialog
                open={this.props.isOpen}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Stock purchase</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure to buy <span className = {styles.bold}>{this.props.name}'s</span> shares in amount of <span className = {styles.bold}>{this.props.amount}</span>?
                        This will cost you <span className = {styles.bold}>{(this.props.cost * this.props.amount).toFixed(2)} US dollars</span> .
                </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick = {this.props.handleModal}>
                        Cancel
                </Button>
                    <Button color="primary" autoFocus className={styles.navlink} onClick = {this.props.submit}>
                        <NavLink to="/account">Buy</NavLink>
                </Button>
                </DialogActions>
            </Dialog> :null
        );
    }

}