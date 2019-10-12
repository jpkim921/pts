import React from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default class PatientProfile extends React.Component {
  constructor(props) {
    super(props);
    // this.state = props.location.state;
    if (!props.location.state) {
      this.state = {
        therapist_id: 1,
        id:'',
        name: '',
        email: '',
        phone: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        zipcode: '',
        redirect: false,
      }
    } else {
      this.state = {
        id: props.location.state.id,
        therapist_id: 1,
        name: props.location.state.name,
        email:props.location.state.email,
        phone: props.location.state.phone,
        street: props.location.state.street,
        apt: props.location.state.apt,
        city: props.location.state.city,
        state: props.location.state.state,
        zipcode: props.location.state.zipcode,
        redirect: false };
    }

  }


  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editButton = event => {
    // event.preventDefault();
    let fieldsets, editButton, submitButton;

    //take out disabled attribute from fieldset elements
    fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
      fieldsets[i].disabled = false;
    }

    editButton = document.getElementById("patient-profile-edit");
    submitButton = document.getElementById("patient-profile-submit");
    editButton.setAttribute("hidden", true);
    submitButton.removeAttribute("hidden");
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("from handleSubmit",this.state)
    this.props.location.updatePatient(this.state.id, this.state);
    this.setState({
        id: '',
        name: '',
        email: '',
        phone: '',
        street: '',
        apt: '',
        city: '',
        state: '',
        zipcode: '',
        redirect: true,
    })
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/therapist" />;
    }
    return (
      <div className="container">
        <h4>Patient Profile</h4>
        <div>
          <Link to="/therapist">Main Page</Link>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col">
              <fieldset className="form-group" disabled>
                <legend>Contact Info:</legend>
                <input
                  className="form-control"
                  placeholder="Enter Full Name"
                  onChange={this.handleChange}
                  name="name"
                  value={this.state.name}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Email"
                  onChange={this.handleChange}
                  name="email"
                  value={this.state.email}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter Phone Number"
                  onChange={this.handleChange}
                  name="phone"
                  value={this.state.phone}
                />
              </fieldset>
            </div>
            <div className="col">
              <fieldset className="form-group" disabled>
                <legend>Address:</legend>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address 1"
                  onChange={this.handleChange}
                  name="street"
                  value={this.state.street}
                />
                <input
                  className="form-control"
                  type="text"
                  placeholder="Address 2"
                  onChange={this.handleChange}
                  name="suite"
                  value={this.state.apt}
                />
                <div className="form-row">
                  <div className="col-5">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="City"
                      onChange={this.handleChange}
                      name="city"
                      value={this.state.city}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="State"
                      onChange={this.handleChange}
                      name="state"
                      value={this.state.state}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Zip"
                      onChange={this.handleChange}
                      name="zipcode"
                      value={this.state.zipcode}
                    />
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <button
                id="patient-profile-submit"
                type="submit"
                className="btn btn-secondary form-control"
                hidden
              >
                Submit
              </button>
            </div>
          </div>
        </form>
        <button
          onClick={this.editButton}
          id="patient-profile-edit"
          className="btn btn-secondary form-control"
        >
          Edit
        </button>
      </div>
    );
  }
}
