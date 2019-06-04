import React, { Component } from "react";
import Therapist from "../components/therapists/Therapist";

class TherapistContainer extends Component {
  render() {
    // console.log("name: ", this.props.therapist.name)
    return (
      <div>
      TEST
      <Therapist therapist={this.props.therapist}/>
        {/*
          <PatientContainer /> */}
      </div>
    );
  }
}

export default TherapistContainer;
