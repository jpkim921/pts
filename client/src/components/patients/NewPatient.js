import React from "react";

export default class AddPatient extends React.Component {
  state = {
    name: "name-placeholder",
    email: "email-placeholder",
    phone: "456-placeholder",
    steet: "street-placeholder",
    apt: "apt-placeholder",
    city: "NYC-placeholder",
    state: "NY-placeholder",
    zipcode: "10019-placeholder"
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("New Patient: ", this.state);
    this.setState({
      name: "",
      email: "",
      phone: "",
      steet: "",
      apt: "",
      city: "",
      state: "",
      zipcode: ""
    });
  };
  render() {
    console.log("New Patient Props: ", this.props);
    return (
      <div>
        <h4>New Patient</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Enter name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="phone"
              onChange={this.handleChange}
              placeholder="Enter phone"
              value={this.state.phone}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="street"
              className="form-control"
              placeholder="Steet address"
              onChange={this.handleChange}
              value={this.state.street}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="apt"
              className="form-control"
              placeholder="Apt #"
              onChange={this.handleChange}
              value={this.state.apt}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="city"
              className="form-control"
              placeholder="Enter city"
              onChange={this.handleChange}
              value={this.state.city}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="state"
              className="form-control"
              placeholder="Enter state"
              onChange={this.handleChange}
              value={this.state.state}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="zipcode"
              className="form-control"
              placeholder="Enter zipcode"
              onChange={this.handleChange}
              value={this.state.zipcode}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
