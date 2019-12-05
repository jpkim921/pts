import React from "react";
import { Link } from "react-router-dom";
import AppointmentsContainer from "../../containers/AppointmentsContainer";


export default class PatientProfile extends React.Component {
  // state={}

  componentDidMount() {
    let { patientId } = this.props.match.params;

    fetch(`/patients/${patientId}`)
      .then(response => response.json())
      .then(patient => this.setState(patient));
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editButton = () => {
    let fieldsets, editButton, submitButton;

    //remove disabled attribute from fieldset elements
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
    let fieldsets, editButton, submitButton;

    event.preventDefault();
    console.log(this.state);
    this.props.updatePatient(this.state);

    fieldsets = document.getElementsByTagName("fieldset");
    for (let i = 0; i < fieldsets.length; i++) {
      fieldsets[i].disabled = true;
    }

    editButton = document.getElementById("patient-profile-edit");
    submitButton = document.getElementById("patient-profile-submit");
    submitButton.setAttribute("hidden", true);
    editButton.removeAttribute("hidden");
  };

  handleDelete = () => {
    this.props.deletePatient(this.state.id)
    this.props.history.push("/")
  }

  render() {
    if (this.state == null) {
      return (
        <div className="container">
          <h1>Loading Patient Info...</h1>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h4>Patient Profile</h4>
          <div>
            <button onClick={this.handleDelete}>Delete Patient</button>
          </div>
          <div>
            <Link to="/">Main Page</Link>
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

          <div>
            <AppointmentsContainer patientId={this.state.id} />
          </div>
        </div>
      );
    }
  }
}