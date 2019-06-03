import React from "react";
import { Link } from "react-router-dom";

class Greetings extends React.Component {
  render() {
    return(
      <div>
        <h2>Sign Up || Login</h2>
        <nav>
          <Link to="/signup">Sign Up</Link>
          <Link to="/login">Login</Link>
        </nav>
      </div>
    )
  }
}


export default Greetings
