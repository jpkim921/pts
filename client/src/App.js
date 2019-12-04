import React, { Component } from "react";
import "./App.css";

import Greetings from "./components/Greetings";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NewPatient from "./components/patients/NewPatient";
import PatientProfile from "./components/patients/PatientProfile";
import PatientsContainer from "./containers/PatientsContainer";
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={PatientsContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}


