import React from "react";

import Patient from "./Patient";

export default function Patients(props) {
  let { patients } = props;
  return (
    <div>
      <h3>Patients Component</h3>
      <ul className="list-group">
        {patients.map((patient, key) => {
          return <Patient key={patient.id} patient={patient} />;
        })}
      </ul>
    </div>
  );
}

// export default class Patients extends React.Component {
//   render() {
//     const renderedPatients = () => {
//       return this.props.patients.map(patient => {
//         return (
//           <Patient
//             key={patient.id}
//             patient={patient}
//             therapistId={this.props.therapistId}
//             updatePatient={this.props.updatePatient}
//           />
//         );
//       });
//     };

//     return (
//       <div>
//         <h4>Patients List</h4>
//         <ul className="list-group">{renderedPatients()}</ul>
//       </div>
//     );
//   }
// }
