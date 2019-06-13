import React from "react";
import { Redirect } from "react-router";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "pero@test.com",
      phone: "1234567890",
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
    // take the data and fetch based on info
    const therapist = this.props.findTherapist(this.state);
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
      <div className="container">
        <div className="row mt-5">
          <div className="col" />
          <div className="col-4">
            <form
              className="text-center form-signin"
              onSubmit={this.handleSubmit}
            >
              <img
                className="mb-4"
                src="https://image.flaticon.com/icons/svg/478/478533.svg"
                alt=""
                width="72"
                height="72"
              />
              <h1 className="h3 mb-3 font-weight-normal">Please Log In</h1>
              <input
                type="text"
                className="form-control"
                placeholder="Email address"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone Number"
                value={this.state.phone}
                onChange={this.handleChange}
              />
              <input className="btn-primary" type="submit" />
            </form>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default Login;
