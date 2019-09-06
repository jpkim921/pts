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
  fetchTherapists,
  fetchTherapist,
  createTherapist
} from "./actions/therapistActions";
import { fetchPatients, createPatient } from "./actions/patientActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  // componentDidMount() {
  //   this.props.fetchTherapists();
  // }

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/" component={Greetings} />
            <Route
              path="/login"
              render={props => (
                <Login
                  {...props}
                  fetchTherapist={this.props.fetchTherapist}
                />
              )}
            />
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
            <Route
              path="/profile"
              render={props => (
                <Therapist {...props} therapist={this.props.therapist} />
              )}
            />
            {/*<Route path="/:therapist_id/newpatient" component={NewPatient} />*/}

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
    therapists: state.therapists.therapists,
    therapist: state.therapists.therapist
  };
};

const mapDispatchToProps = {
  // fetchTherapists,
  fetchTherapist,
  createTherapist,
  fetchPatients,
  createPatient
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
