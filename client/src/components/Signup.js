import React from "react";
import {Redirect} from 'react-router-dom'

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
      email: "",
      phone: "",
      discipline: "",
      password: "",
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
    this.props.createTherapist(this.state);
    console.log(this.state);
    this.setState({
      name: "",
      email: "",
      phone: "",
      discipline: "",
      password: "",
      toTherapist: true
    })
  };

  render() {
    if (this.state.toTherapist === true) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container container-background">
        <div className="row">
          <div className="col" />
          <div className="col-6">
            <h3 className="sign-up-heading">Sign Up</h3>
            <form onSubmit={this.handleSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.name}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Enter Email"
                  name="email"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Enter Password"
                  name="password"
                  type="password"
                  onChange={this.handleChange}
                  value={this.state.password}
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  placeholder="Enter Phone Number"
                  name="phone"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.phone}
                />
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="discipline"
                  onChange={this.handleChange}
                  value="Occupational Therapist"
                />
                Occupational Therapist
              </div>
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="discipline"
                  onChange={this.handleChange}
                  value="Physical Therapist"
                />
                Physical Therapist
              </div>
              <div className="form-group">
                <input class="btn btn-primary" type="submit" />
              </div>
            </form>
          </div>
          <div className="col" />
        </div>
      </div>
    );
  }
}

export default Signup;
