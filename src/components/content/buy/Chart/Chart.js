import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

export default class Chart extends Component {
    state = {
        startDate: new Date()
    };

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    render() {
        return (
            <>
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                <LineChart width={500} height={300}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                </LineChart>
            </>
        );
    }
}