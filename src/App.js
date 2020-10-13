import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';

import Auth from './Auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    Auth.isAuthenticated() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      isAuthenticated: Auth.isAuthenticated()
    }
  }

  render(){

    return (
      <div className="App">
        <header className="App-header">
          <h1>Spotify</h1>
        </header>
        <Router>
          {this.state.isAuthenticated ? 
            <nav className="App-navigation">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/logout">Logout</Link></li>
              </ul>
            </nav>
          : null }
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/callback" render={(props) => {
              var hash = props.location.hash.substring(1)
                .split("&")
                .reduce(function(initial, item) {
                  if (item) {
                    var parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                  }
                  return initial;
                }, {});
              
              var token = hash["access_token"];

              Auth.setToken(token);
              this.setState({isAuthenticated: true})
              return <Redirect to="/" />;
            }} />
            <Route path="/logout" render={(props) => {
              Auth.removeToken();
              this.setState({isAuthenticated: false});
              return <Redirect to="/login" />;
            }} />
            <PrivateRoute path="/about" component={About} />
            <PrivateRoute path="/" component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
 
}

export default App;
