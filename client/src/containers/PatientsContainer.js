import React, {Component} from "react";
import Patients from "../components/patients/Patients";
import { connect } from "react-redux";
import { updatePatient } from "../actions/patientActions";

class PatientsContainer extends Component {
  render() {
    return (
      <div>
        <h1>PatientsContainer Component</h1>
      </div>
    );
  }
}

export default PatientsContainer;