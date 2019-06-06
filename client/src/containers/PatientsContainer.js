import React from "react";
import {Patients} from "../components/patients/Patients";

class PatientsContainer extends React.Component {

  componentDidMount(){
    this.props.fetchPatients()
  }

  render() {
    return (
      <div>
        TEST from PatientsContainer
        <Patients />
      </div>
    );
  }
}

export default PatientsContainer;
