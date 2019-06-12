import React from "react";

export default function Therapist(props) {
  return (
    <div>
      <div className="card">
        <div className="card-header">Profile Page</div>
        <div className="card-body">
          <h5 className="card-title">{props.therapist.name}</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
