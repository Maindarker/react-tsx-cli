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
  state = {
    color: ''
  }
  componentDidMount() {
    // console.log(this.props);
  }
  componentWillUnmount() {
    console.log("Home unmount");
  }
  handleHomeClick = () => {
    this.setState({
      color: '#f00'
    })
  }
  render() {
    return <div  style={{color: this.state.color}} onClick={this.handleHomeClick}>Home</div>;
  }
}

class A extends Component {
  componentDidMount() {
    console.log(this.props)
  }
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
                    <Route path="/" exact><Home/></Route>
                    <Route path="/a" component={A}/>
                    <Route path="/b" component={B}/>
                </Switch>

                <Link to="/">Home</Link>
                <Link to='/a'>A</Link>
                <Link to="/b">B</Link>
            </Router>
        </div>
    );
};
