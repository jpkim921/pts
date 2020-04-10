import React from "react";
import { Link } from "react-router-dom";



export default class Patient extends React.Component{

  render() {  
    console.log(this.state)
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Link
            className="text-decoration-none text-reset"
            to={{
              pathname: `/patient/${this.props.patient.id}`,
              updatePatient: this.props.updatePatient,
            }}
          >
            <h5 className="card-title">{this.props.patient.name}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">
            {`Phone: (${this.props.patient.phone.slice(0,3)})-${this.props.patient.phone.slice(3,6)}-${this.props.patient.phone.slice(6,10)}`}
          </h6>
        </div>
      </div>
    </div>
  );
  }
} 