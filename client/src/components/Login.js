import React from "react";
import { Redirect } from "react-router";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      phone: "",
      toTherapist: false
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    // still need to complete this part
    // take the data and fetch based on info
    const therapist = this.props.findTherapist(this.state);
    // const loginCreds = this.state
    this.props.fetchTherapist(therapist.id);
    this.setState({
      toTherapist: true,
      email: "",
      phone: ""
    });
  };

  render() {
    if (this.state.toTherapist === true) {
      return <Redirect to="/therapist" />;
    }

    return (
      <div>
        TEST FROM LOGIN PAGE
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter Email"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br />
          <input
            placeholder="Enter Phone Number"
            name="phone"
            type="text"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" />
        </form>
        {this.state.email}
        {this.state.password}
      </div>
    );
  }
}

export default Login;
