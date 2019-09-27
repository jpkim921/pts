import React from "react";
import { Link } from "react-router-dom";

export const Patient = props => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Link className="text-decoration-none text-reset"to={`/patient/${props.patient.id}`}>
            <h5 className="card-title">{props.patient.name}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">
            {`Phone: (${props.patient.phone.slice(0,3)})-${props.patient.phone.slice(3,6)}-${props.patient.phone.slice(6, 10)}`}
          </h6>
          {/*<p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
          <a href="#" className="card-link">
            Create Appointment
          </a>
          <a href="#" className="card-link">
            Create Note
          </a>
        </div>
      </div>
    </div>
  );
};
