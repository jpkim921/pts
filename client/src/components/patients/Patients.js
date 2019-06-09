import React from "react";
import { Patient } from "./Patient";

export default class Patients extends React.Component {


  renderPatients = () => {
    return this.props.patients.map(patient => {
      return <h4>{patient.name}</h4>;
    });
  };

  render() {

    return (
      <div>
        <h4>Hello</h4>
        {this.renderPatients()}
      </div>
    );
  }
}
