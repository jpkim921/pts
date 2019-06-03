import React from "react";

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
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
    // still need to complete this part
  }

  render() {
    return (
      <div>
        TEST FROM LOGIN PAGE
        <form onSubmit={this.handleSubmit}>
          <input placeholder="Enter Email" name="email" type="text" onChange={this.handleChange} />
          <br />
          <input placeholder="Enter Password" name="password" type="text" onChange={this.handleChange} />
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
