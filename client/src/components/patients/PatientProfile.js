import React from "react";

export default class PatientProfile extends React.Component {
  constructor() {
    super()

    this.state = {}
  }

  componentDidMount(){
    const patientInfo = this.props.location.fetchPatient(this.props.match.params.id)
    this.setState(patientInfo)
  }

  render() {
    console.log(this.state)
    return(
      <div className="container">
        <h3>Patient Profile</h3>
      </div>
    )
  }
}


{/*<form action="">
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
</form>*/}
