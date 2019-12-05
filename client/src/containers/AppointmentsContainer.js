import React, { Component } from "react";
import { connect } from "react-redux";
import {fetchAppointments} from "./../actions/appointmentActions"
import Appointments from "./../components/appointments/Appointments"

class AppointmentsContainer extends Component {

  componentDidMount() {
    let {fetchAppointments} = this.props
    fetchAppointments()
  }

  render() {
    let { appointments } = this.props;

    return (
      <div>
        <h1>Appointments Container</h1>
        <Appointments appointments={appointments} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    appointments: state.appointments.appointments
  };
};

const mapDispatchToProps = {
  fetchAppointments
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentsContainer);
