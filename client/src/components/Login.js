import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      email: "",
      phone: ""
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
    const therapist = this.props.findTherapist(this.state)
    // const loginCreds = this.state
    console.log("loginCreds - therapist ID: ", therapist.id)

  }


  render() {
    return (
      <div>
        TEST FROM LOGIN PAGE
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Email" name="email" type="text" onChange={this.handleChange} />
          <br />
          <input placeholder="Enter Phone Number" name="phone" type="text" onChange={this.handleChange} />
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
