import React from "react";
import { Patient } from "./Patient";

export default class Patients extends React.Component {

  // renderPatients = () => {
  //   return this.props.patients.map(patient => {
  //     return <Patient key={patient.id} patient={patient} updatePatient={this.props.updatePatient}/>;
  //   });
  // };

  render() {
    const renderedPatients = () => {
      return this.props.patients.map(patient => {
        return <Patient key={patient.id} patient={patient} updatePatient={this.props.updatePatient}/>;
      });
    };

    return (
      <div>
        <h4>Patients List</h4>
        {/*// <ul className="list-group">{this.renderPatients()}</ul>*/}
        <ul className="list-group">{renderedPatients()}</ul>
      </div>
    );
  }
}
