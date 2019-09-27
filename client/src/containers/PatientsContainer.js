import React from "react";
import Patients from "../components/patients/Patients";
import { connect } from "react-redux";
import {fetchPatient} from "../actions/patientActions";

class PatientsContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPatients();
  // }

  render() {
    // console.log("from PatientsContainer: ", this.props.patients)
    return (
      <div>
        <Patients patients={this.props.patients} fetchPatient = {this.props.fetchPatient}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    patients:state.therapists.patients
  }
}

const mapDispatchToProps = {
  fetchPatient
};

export default connect(mapStateToProps, mapDispatchToProps)(PatientsContainer);
