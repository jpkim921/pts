import React from "react";

export const Patient = props => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.patient.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.patient.phone}</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="card-link">Create Appointment</a>
          <a href="#" className="card-link">Create Note</a>
        </div>
      </div>
    </div>
  )
};
