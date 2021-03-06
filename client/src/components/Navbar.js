import React from "react";
import { Link } from "react-router-dom";

export const Navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-light bg-dark text-white">
        {props.therapist.name ? (
          <Link className="text-white" to="/profile">
            {props.therapist.name}
          </Link>
        ) : (
          <Link className="text-white" to="/login">
            Login
          </Link>
        )}
        <Link to={`/${props.therapist.id}/newpatient`} className="text-white">
          Add Patient
        </Link>
      </nav>
    </div>
  );
};
