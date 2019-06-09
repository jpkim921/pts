import React from "react";
import Patients from "../components/patients/Patients";
import { Patient } from "../components/patients/Patient";
import { connect } from "react-redux";


class PatientsContainer extends React.Component {
  // componentDidMount() {
  //   this.props.fetchPatients();
  // }

  render() {
    // console.log("from PatientsContainer: ", this.props.patients)
    return (
      <div>
        <Patients patients={this.props.patients} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    patients:state.therapists.patients
  }
}

export default connect(mapStateToProps)(PatientsContainer);
