import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Account from "./account/Account";
import styles from './Content.module.css';


class Content extends React.Component {
    render() {
        const { userStock } = this.props;

        return (
            <div className = { styles.wrapper }>
                <Route exact path='/account' render={() => <Account userStock={userStock}/>} />
                {/* <Route path='/stock' render={() => <Stock />} />
                <Route path='/buy' render={() => <Buy />} /> */}
            </div>
        );
    }
}

export default Content;