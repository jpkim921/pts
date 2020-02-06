import React from "react";
// import { Patient } from "./Patient";
import Patient from "./Patient";

export default class Patients extends React.Component {
  render() {
    const renderedPatients = () => {
      return this.props.patients.map(patient => {
        return (
          <Patient
            key={patient.id}
            patient={patient}
            therapistId={this.props.therapistId}
            updatePatient={this.props.updatePatient}
          />
        );
      });
    };

    return (
      <div>
        <h4>Patients List</h4>
        <ul className="list-group">{renderedPatients()}</ul>
      </div>
    );
  }
}
