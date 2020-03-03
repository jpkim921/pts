import React from "react";
import { Link } from "react-router-dom";

export default function Therapist(props) {
  console.log(props)
  return (
    <div>
      <div className="card">
        <div className="card-header">Profile Page</div>
        <div className="card-body">
          <h5 className="card-title">
            {props.therapist.name}: {props.therapist.discipline}
          </h5>
          <p className="card-text">
            Patient Count:{" "}
            {props.therapist.patients.length !== 0
              ? props.therapist.patients.length
              : "None"}
          </p>
          <p className="card-text">
            To add additional metadata as app continues to develop.<br/>
            Additional metadata such as hours worked, affiliated agency(-ies) and others.
          </p>
          <Link className="text-white" to="/therapist">
            <button className="btn btn-primary">Back to Main Page</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
