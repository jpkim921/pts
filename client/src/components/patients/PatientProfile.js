import React from "react";

export default class PatientProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.location.state;
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  editButton = event => {
    event.preventDefault();
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


  render() {
    return (
      <div className="container">
        <h4>Patient Profile</h4>
        <form action="">
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
              <button
                onClick={this.editButton}
                id="patient-profile-edit"
                className="btn btn-secondary form-control"
              >
                Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

{
  /*<form action="">
<div className="row">
  <div className="col">
    <fieldset className="form-group">
      <legend>Contact Info:</legend>
      <input
        className="form-control"
        placeholder="Enter Full Name"
        value={`${props.patient.name}`}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Enter Email"
        value={`${props.patient.email}`}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Enter Phone Number"
        value={`${props.patient.phone}`}
      />
    </fieldset>
  </div>
  <div className="col">
    <fieldset className="form-group">
      <legend>Address:</legend>
      <input
        className="form-control"
        type="text"
        placeholder="Address 1"
        value={`${props.patient.street}`}
      />
      <input
        className="form-control"
        type="text"
        placeholder="Address 2"
        value={`${props.patient.apt}`}
      />
      <div class="form-row">
        <div class="col-7">
          <input
            type="text"
            class="form-control"
            placeholder="City"
            value={`${props.patient.city}`}
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="State"
            value={`${props.patient.state}`}
          />
        </div>
        <div class="col">
          <input
            type="text"
            class="form-control"
            placeholder="Zip"
            value={`${props.patient.zipcode}`}
          />
        </div>
      </div>
    </fieldset>
  </div>
</div>
</form>*/
}
