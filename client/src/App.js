import React, { Component } from "react";
import "./App.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Reserve from "./components/Reserve";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <Route exact path="/reserve" component={Reserve} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
