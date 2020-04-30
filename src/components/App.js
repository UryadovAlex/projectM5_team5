<<<<<<< HEAD
import React from 'react';



class App extends React.Component{
    
    render(){
        return(
            



<p>as</p>
        )
    }
}

export default App;
=======
import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

// import styles from './App.module.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';



export default class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                <Content />
                <Footer />
            </BrowserRouter>
        )
    }
}
>>>>>>> 08c5b4525d9c282b7700ad61999ca5a2318720d6
