import React from "react";
import { Link } from "react-router-dom";

class Greetings extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <div className="column">
          <div id="login">
            <h1>Welcome Back</h1>
            <div>
              <label for="user-name">User Name</label>
              <input
                type="text"
                id="user-name"
                name="user-name"
                placeholder="Email"
              />
              <br />
              <label for="password">Password</label>
              <input
                type="text"
                id="password"
                name="password"
                placeholder="Password"
              />
              <br />
              <input type="submit" value="Login" />
            </div>
          </div>
        </div>
        <div className="column"></div>
        <div id="sign-in">
          <h1>New user?</h1>
          <h1>Begin your journey with us</h1>
          <br />
          <br />
          <input type="submit" value="Sign-up" />
        </div>
      </div>
    );
  }
}

export default Greetings;
