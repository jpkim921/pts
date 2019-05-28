import React, { Component } from "react";
import { Therapist } from "../components/therapists/Therapist";
import { Patients } from "../components/patients/Patients";

class TherapistContainer extends Component {
  render() {
    return (
      <div>
        TEST FROM THERAPISTCONTAINER
        <Therapist />
        <Patients />
      </div>
    );
  }
}

export default TherapistContainer;