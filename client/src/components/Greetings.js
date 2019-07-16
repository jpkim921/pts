import React from "react";
import { Link } from "react-router-dom";

class Greetings extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <div className="row">
          <div className="col" />
          <div className="col-6">
            <h2>Sign Up || Login</h2>
            <nav>
              <Link to="/signup">
                <button className="btn btn-primary">Sign Up</button>
              </Link>
              <Link to="/login">
                <button className="btn btn-primary ml-2">Login</button>
              </Link>
            </nav>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default Greetings;
