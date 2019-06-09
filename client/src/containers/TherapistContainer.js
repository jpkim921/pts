import React, { Component } from "react";
import Therapist from "../components/therapists/Therapist";
import PatientsContainer from "./PatientsContainer";
import { connect } from "react-redux";

class TherapistContainer extends Component {
  render() {
    return (
      <div>
        <Therapist therapist={this.props.therapist} />
        <PatientsContainer fetchPatients={this.props.fetchPatients} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    therapist: state.therapists.therapist
  };
};

export default connect(mapStateToProps)(TherapistContainer);
