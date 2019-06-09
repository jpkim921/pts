import React from "react";
import { Patients } from "../components/patients/Patients";
// import Patients from "../components/patients/Patients";
import { Patient } from "../components/patients/Patient";

class PatientsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchPatients();
  }

  render() {
    console.log("from patients: ", this.props.patients)
    return (
      <div>
        <Patients patients={this.props.therapist.patients} />
      </div>
    );
  }
}

export default PatientsContainer;
