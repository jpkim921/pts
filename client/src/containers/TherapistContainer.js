import React, { Component } from "react";
// import Therapist from "../components/therapists/Therapist";
import PatientsContainer from "./PatientsContainer";
import { Navbar } from "../components/Navbar";
import { connect } from "react-redux";

// import { BrowserRouter as Router, Route } from "react-router-dom";

class TherapistContainer extends Component {
  render() {
    return (
      <div className="container">
        <Navbar
          therapist={this.props.therapist}
          createPatient={this.props.createTherapist}
        />
        {/*<Therapist therapist={this.props.therapist} />*/}
        <PatientsContainer
          fetchPatients={this.props.fetchPatients}
          therapistId={this.props.therapist.id}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    therapist: state.therapists.therapist
    // patients: state.therapists.therapist.patients
  };
};

export default connect(mapStateToProps)(TherapistContainer);
