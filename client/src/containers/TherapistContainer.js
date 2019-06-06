import React, { Component } from "react";
import Therapist from "../components/therapists/Therapist";
import PatientsContainer from "./PatientsContainer";

class TherapistContainer extends Component {


  render() {
    // console.log(this.props)
    return (
      <div>
        TEST
        <Therapist therapist={this.props.therapist} />
        <PatientsContainer fetchPatients={this.props.fetchPatients}/>
      </div>
    );
  }
}

export default TherapistContainer;
