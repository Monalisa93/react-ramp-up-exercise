import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import axios from 'axios';
import orderBy from 'lodash/orderBy';
import isEqual from 'lodash/isEqual';
import RaisedButton from "material-ui/RaisedButton";
import ErrorBoundary from './components/ErrorBoundary';

import "./App.css";
import Form from "./Form";
import Table from "./Table";


injectTapEventPlugin();

const invertDirection = {
    asc : 'desc',
    desc: 'asc'
}

class MainView extends Component {
    state = {
        data: [],
        columnToSort: '',
        sortDirection: 'desc'
    };

    componentDidMount(){
        axios.get('https://private-5b0c2-uob1.apiary-mock.com/customers')
            .then(res => {
                console.log((res));
                this.setState({
                    data: res.data,
                })
            });
    }


    handleSort = (columnName, data) => {
        this.setState(state =>({
            columnToSort: columnName,
            sortDirection: state.columnToSort === columnName ? invertDirection[state.sortDirection] : "asc"
        }))
    };

    handleClick = e => {
        e.preventDefault();
        this.props.history.push('/sort');
    };


    render() {

        return (
            <MuiThemeProvider>
                <div className="App">
                    <Form
                        onSubmit={submission =>
                            this.setState({
                                data: [...this.state.data, submission]
                            })}
                    />

                    <ErrorBoundary>
                    <Table
                        data={orderBy(this.state.data, this.state.columnToSort, this.state.sortDirection)}
                        handleSort={this.handleSort}
                        header={[
                            {
                                name: "First name",
                                prop: "name"
                            },
                            {
                                name: "Address",
                                prop: "address"
                            },
                            {
                                name: "Phone",
                                prop: "phone"
                            },
                            {
                                name:"Hobbies",
                                prop:"hobbies"
                            }
                        ]}
                    />
                    </ErrorBoundary>
                    <RaisedButton label="Sort" onClick={e => this.handleClick(e)} primary />
                </div>
            </MuiThemeProvider>
        );
    }
}

export default MainView;

