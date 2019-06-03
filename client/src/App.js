import React, { Component } from "react";
import "./App.css";

import TherapistContainer from "./containers/TherapistContainer";
import Therapists from "./components/therapists/Therapists";
import Greetings from "./components/Greetings";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Therapist from "./components/therapists/Therapist"
import { connect } from "react-redux";
import { fetchTherapists, fetchTherapist, createTherapist } from "./actions/therapistActions";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  componentDidMount() {
    this.props.fetchTherapists();
    // this.props.fetchTherapist();
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Greetings} />
          <Route path="/login" component={Login} />
          <Route exact path="/signup" render={props => (
            <Signup {...props} createTherapist={this.props.createTherapist} />
          )}
          />
          <Route path="/therapists" render={props => (
              <Therapists {...props} therapists={this.props.therapists} />
            )}
          />
          <Route path="/therapist" render={props => (
              <Therapist {...props} therapist={this.props.therapist} />
            )}
          />
        </Switch>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    therapists: state.therapists.therapists,
    // therapist: state.therapists.therapist
  };
};

const mapDispatchToProps = {
  fetchTherapists,
  fetchTherapist,
  // createTherapist
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
