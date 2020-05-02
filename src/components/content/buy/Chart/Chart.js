import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import dayjs from "dayjs";
import styles from './Chart.module.css';

export default class Chart extends Component {
    state = {
        startDate: new Date().setDate(new Date().getDate() - 30),
        endDate: new Date(),
        data: [],
    };

    handleStartDate = (date) => {
        this.setState({
            startDate: date
        }, () => {
            this.getHistory();
        });
    };

    handleEndDate = (date) => {
        this.setState({
            endDate: date
        }, () => {
            this.getHistory();
        });
    };

    getHistory = async () => {
        const symbol = this.props.symbol
        const startDate = dayjs(this.state.startDate).format(`YYYY-MM-DD`);
        const endDate = dayjs(this.state.endDate).format(`YYYY-MM-DD`);
        const info = await fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}?from=${startDate}&to=${endDate}`)
        const data = await info.json();
        this.setState(
            {
                data: data.historical
            }
        )
    }

    componentDidMount() {
        this.getHistory();
    }

    render() {
        return (
            <div className = {styles.wrapper}>
                <div className = {styles.datepickers}>
                    <div>
                        <label>From: </label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={this.handleStartDate}
                        />
                    </div>
                    <div>
                        <label>To: </label>
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={this.handleEndDate}
                            filterDate={(date) => {
                                const now = new Date();
                                return now > date;
                            }}
                        />
                    </div>
                </div>
                <LineChart
                    width={500}
                    height={300}
                    data={this.state.data}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey='date' />
                    <YAxis domain={['dataMin', 'dataMax']} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="open" stroke="#8884d8" activeDot={{ r: 5 }} />
                </LineChart>
            </div>
        );
    }
}