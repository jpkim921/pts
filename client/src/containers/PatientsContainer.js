import React from "react";
import Patients from "../components/patients/Patients";
import { connect } from "react-redux";
import {updatePatient} from "../actions/patientActions";

class PatientsContainer extends React.Component {

  render() {
    return (
      <div>
        <Patients patients={this.props.patients} updatePatient = {this.props.updatePatient}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    patients: state.therapists.patients
  }
}

const mapDispatchToProps = {
  updatePatient
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsContainer);
