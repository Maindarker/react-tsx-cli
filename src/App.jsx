import React, { Component } from 'react';
import Home from '@components/Home';
import Common from '@components/Common';
// import { hot } from 'react-hot-loader/root';
import './app.scss';

class App extends Component {
    render() {
        console.log(process.env.NODE_ENV)
        return (
            <div className="my-app">
                <Home />
                <Common />
            </div>
        );
    }
}

export default (App);
