import React from "react";
import { Patient } from "./Patient";

export default class Patients extends React.Component {
  // state = {
  //   patients: [
  //     {
  //       name: "Karren Fowler",
  //       email: "KF@test.com",
  //       phone: "1111111111",
  //       street: "39 Cloud Street",
  //       apt: "49L",
  //       city: "New York City",
  //       state: "New York",
  //       zipcode: 10001
  //     },
  //     {
  //       name: "Sulema Behne",
  //       email: "SB@test.com",
  //       phone: "2222222222",
  //       street: "9 Sunset Blvd.",
  //       apt: "3rd Floor",
  //       city: "New York City",
  //       state: "New York",
  //       zipcode: 10002
  //     },
  //     {
  //       name: "Rebeca Faison",
  //       email: "RF@test.com",
  //       phone: "3333333333",
  //       street: "Duval Street",
  //       apt: "",
  //       city: "New York City",
  //       state: "New York",
  //       zipcode: 10003
  //     },
  //     {
  //       name: "Milagros Coutu",
  //       email: "MC@test.com",
  //       phone: "4444444444",
  //       street: "Harman St.",
  //       apt: "",
  //       city: "New York City",
  //       state: "New York",
  //       zipcode: 10004
  //     },
  //     {
  //       name: "Stephine Ruoff",
  //       email: "SR@test.com",
  //       phone: "5555555555",
  //       street: "Zee St.",
  //       apt: "001",
  //       city: "New York City",
  //       state: "New York",
  //       zipcode: 10005
  //     }
  //   ]
  // };

  renderPatients = () => {
    return this.props.patients.map(patient => {
      return <Patient key={patient.id} patient={patient} updatePatient={this.props.updatePatient}/>;
    });
  };

  // change it back to the above after finishing and delete the below renderPatients. also delete state.patients

  // renderPatients = () => {
  //   return this.state.patients.map(patient => {
  //     return (
  //       <li key={patient.name} className="list-group-item">
  //         <Patient patient={patient} />
  //       </li>
  //     );
  //   });
  // };
  render() {
    return (
      <div>
        <h4>Patients List</h4>
        <ul className="list-group">{this.renderPatients()}</ul>
      </div>
    );
  }
}
