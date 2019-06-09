import React from "react";
import { Patient } from "./Patient";

export const Patients = props => {
  console.log("from Patients", props);
  return (
    <div>
      {props.patients.map((patient, id) => (
        <Patient id={id} patient={patient} />
      ))}
    </div>
  );
};

// export default class Patients extends React.Component {
//   // renderPatients = () => {
//   //   return this.props.patients.map((patient, id) => (
//   //     <Patient patient={patient} id={id} />
//   //   ))
//   // }
//
//   render() {
//     console.log("Inside Render", this.props.patients);
//     const renderPatients = this.props.patients.map((patient, id) => (
//       <Patient patient={patient} id={id} />
//     ));
//     return <div>TEST {renderPatients} </div>;
//   }
// }
