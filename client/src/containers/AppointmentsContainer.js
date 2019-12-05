import React, { Component } from "react";
import { connect } from "react-redux";
import AppointmentsForm from "./../components/appointments/AppointmentsForm"
import Appointments from "./../components/appointments/Appointments";
import {
  fetchAppointments,
  createAppointment
} from "./../actions/appointmentActions";


class AppointmentsContainer extends Component {

  componentDidMount() {
    let {fetchAppointments} = this.props
    fetchAppointments()
  }

  

  render() {
    let { appointments, createAppointment, patientId } = this.props;

    return (
      <div>
        <h1>Appointments Container</h1>
        <div>
          <AppointmentsForm patientId={patientId} createAppointment={createAppointment} />
        </div>
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
  fetchAppointments,
  createAppointment
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppointmentsContainer);
