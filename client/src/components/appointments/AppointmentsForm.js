import React, { Component } from "react";

export default class AppointmentForm extends Component {
  constructor(props) {
    super(props);
    let today = new Date().toISOString().substr(0, 10);

    this.state = {
      patient_id: props.patientId,
      date: today,
      time: "08:00"
    };
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = () => {
    let { createAppointment } = this.props;
    createAppointment(this.state);
  };

  render() {
console.log(this.props);
    return (
      <div className="container">
        <h3>Apointment Form</h3>
        <form className="form-group">
          <div className="row">
            <div className="col-5">
              <input
                className="form-control form-control-md"
                onChange={this.handleChange}
                name="date"
                type="date"
                min={this.state.date}
                max={this.state.date + 7}
                // max="2019-12-11"
                // step="7"
              />
            </div>
            <br />
            <div className="col-5">
              <input
                className="form-control form-control-md"
                onChange={this.handleChange}
                name="time"
                type="time"
                value={this.state.time}
                step="900"
              />
            </div>
            <button
              onClick={this.handleSubmit}
              className=" btn btn-secondary col-2"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    );
  }
}
