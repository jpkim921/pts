import React from "react";
import { Link } from "react-router-dom";

export const Patient = props => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Link
            className="text-decoration-none text-reset"
            to={{
              pathname: `/patient/${props.patient.id}`,
              updatePatient: props.updatePatient,
            }}
          >
            <h5 className="card-title">{props.patient.name}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">
            {`Phone: (${props.patient.phone.slice(0,3)})-${props.patient.phone.slice(3, 6)}-${props.patient.phone.slice(6,10)}`}
          </h6>
        </div>
      </div>
    </div>
  );
};
