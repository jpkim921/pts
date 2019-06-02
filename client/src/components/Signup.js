import React from "react";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name:"",
      email: "",
      phone:0,
      discipline:"",
      password: ""
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.createTherapist(this.state)
    console.log(this.state)
    this.setState({
      name:"",
      email: "",
      phone:0,
      discipline:"",
      password: ""
    });
  }


  render() {
    return (
      <div>
        TEST FROM Sign Up PAGE
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Name" name="name" type="text" onChange={this.handleChange} value={this.state.name} />
          <br />
          <input placeholder="Enter Email" name="email" type="text" onChange={this.handleChange} value={this.state.email} />
          <br />
          <input placeholder="Enter Password" name="password" type="password" onChange={this.handleChange} value={this.state.password} />
          <br />
          <input placeholder="Enter Phone Number" name="phone" type="text" onChange={this.handleChange} value={this.state.phone} />
          <br />
          <label>Therapy Discipline</label>
          <br />
          <input type="radio" name="discipline" onChange={this.handleChange} value="Occupational Therapist"/>Occupational Therapist
          <input type="radio" name="discipline" onChange={this.handleChange} value="Physical Therapist"/>Physical Therapist
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default Signup;
