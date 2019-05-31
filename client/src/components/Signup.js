import React from "react";

class Signup extends React.Component {
  constructor() {
    super();

    this.state = {
      name:"",
      email: "",
      password: "",
      phone:"",

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
    this.state = {
      name:"",
      email: "",
      password: "",
      phone:"",
    };
  }


  render() {
    console.log(this.props)


    return (
      <div>
        TEST FROM Sign Up PAGE
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Name" name="name" type="text" onChange={this.handleChange} />
          <br />
          <input placeholder="Enter Email" name="email" type="text" onChange={this.handleChange} />
          <br />
          <input placeholder="Enter Password" name="password" type="password" onChange={this.handleChange} />
          <br />
          <input placeholder="Enter Phone Number" name="phone" type="text" onChange={this.handleChange} />
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
