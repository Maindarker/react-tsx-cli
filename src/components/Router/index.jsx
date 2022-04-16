import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Link,
  Switch,
  Route,
//   useRoutes,
//   Outlet,
//   useParams
} from "react-router-dom";
import './index.scss'

class Home extends Component {
  componentWillUnmount() {
    console.log("Home unmount");
  }
  render() {
    return <div>Home</div>;
  }
}

class A extends Component {
  render() {
    return <div>A</div>
  }
}

class B extends Component {
    componentDidMount() {
        // console.log(this.props.match);
    }

    render() {
        return <div>B</div>;
    }
}

export default () => {
    return (
        <div className="demo">
            <Router>
                <Switch>
                    <Route path="/" component={Home}/>
                    <Route path="/a" component={A}/>
                    <Route path="/b" component={B}/>
                </Switch>

                <Link to="/">Home</Link>
                <Link to="/a">A</Link>
                <Link to="/b">B</Link>
            </Router>
        </div>
    );
};
