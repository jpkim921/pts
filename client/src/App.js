import React, { Component } from "react";
import "./App.css";

import TherapistContainer from "./containers/TherapistContainer";
// import Therapists from "./components/therapists/Therapists";
import Greetings from "./components/Greetings";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Therapist from "./components/therapists/Therapist";
import NewPatient from "./components/patients/NewPatient";
import { connect } from "react-redux";
import {
  createTherapist
} from "./actions/therapistActions";
import { fetchPatients, createPatient } from "./actions/patientActions";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Greetings} />
            <Route path="/login" component={Login} />
            <Route
              path="/signup"
              render={props => (
                <Signup
                  {...props}
                  createTherapist={this.props.createTherapist}
                />
              )}
            />
            <Route path="/therapist" component={TherapistContainer} />
            {/*<Route path="/profile" component={Therapist} />*/}
            <Route
              path="/profile"
              render={props => (
                <Therapist {...props} therapist={this.props.therapist} />
              )}
            />
            <Route
              path="/:therapist_id/newpatient"
              render={props => (
                <NewPatient {...props} createPatient={this.props.createPatient} />
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    therapist: state.therapists.therapist
  };
};

const mapDispatchToProps = {
  createTherapist,
  fetchPatients,
  createPatient
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
