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

import { updatePatient, deletePatient } from "./actions/patientActions";

class App extends Component {
  render() {
    
    let {updatePatient} = this.props

    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={PatientsContainer} />
            <Route
              path="/patient/:patientId"
              render={props => <PatientProfile {...props} updatePatient={updatePatient} deletePatient={deletePatient} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps = {
  updatePatient,
  deletePatient,
};

export default connect(null, mapDispatchToProps)(App);
