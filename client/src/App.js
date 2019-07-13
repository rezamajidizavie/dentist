import React, {Component} from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Reserve from "./components/Reserve";
import * as moment from "jalali-moment";
import Success from "./components/Success";
import Admin from "./components/Admin";

import PrivateRoute from "./components/common/PrivateRoute";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from "./actions/authActions";

import {Provider} from "react-redux";
import store from "./store";
import Login from "./components/Login";
import ReservesList from "./components/ReservesList";
import Dashboard from "./components/Dashboard";
import NotAuthorized from "./components/NotAuthorized";
import Article from "./components/landing/Article";
import Register from "./components/Register";
import PrivateRouteForNormalUsers from "./components/common/PrivateRouteForNormalUsers";

// check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isauthenticatd
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  componentDidMount() {
    moment.locale("fa");
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/reserve" component={Reserve} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />

            <Route exact path="/not-authorized" component={NotAuthorized} />
            <Route exact path="/article" component={Article} />

            <Switch>
              <PrivateRouteForNormalUsers
                exact
                path="/admin"
                component={Admin}
              />
            </Switch>
            <Switch>
              <PrivateRouteForNormalUsers
                exact
                path="/reservelist"
                component={ReservesList}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
