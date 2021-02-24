import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Deneme from './Deneme'
import Todolist from './Todolist'




export default class App extends Component {
  render() {
    return (
      <Router>
        <Link to="/Home">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Deneme">Deneme</Link>
        <Link to="/Todolist">Todolist</Link>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about"  component={About} />
          <Route  path="/deneme"  component={Deneme} />
          <Route path="/todolist" component={Todolist} />
        </Switch>
      </Router>
    )
  }
}

