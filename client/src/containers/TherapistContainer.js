import React, { Component } from "react";
import Therapist from "../components/therapists/Therapist";
import PatientsContainer from "./PatientsContainer";
import { connect } from "react-redux";


class TherapistContainer extends Component {
  render() {
    console.log(this.props.therapist);
    console.log(this.props.therapist.patients);
    return (
      <div>
        TEST
        <Therapist therapist={this.props.therapist} />
        {/*<PatientsContainer
          patients={this.props.therapist.patients}
          fetchPatients={this.props.fetchPatients}
        />*/}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    therapist: state.therapists.therapist,
    patients: state.therapists.therapist.patients
  }
}

export default connect(mapStateToProps)(TherapistContainer);
