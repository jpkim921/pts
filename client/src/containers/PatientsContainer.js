import React, { Component } from "react";
import Patients from "../components/patients/Patients";
import { connect } from "react-redux";
import { fetchPatients, updatePatient } from "../actions/patientActions";

class PatientsContainer extends Component {
  componentDidMount() {
    this.props.fetchPatients();
  }

  render() {
    

    return (
      <div>
        <h1>PatientsContainer Component</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    patients: state.patients.patients
  };
};

const mapDispatchToProps = {
  fetchPatients
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsContainer);
