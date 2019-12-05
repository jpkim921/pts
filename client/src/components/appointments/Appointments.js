import React from "react";
import Appointment from "./Appointment";

export default function Appointments(props) {
  let { appointments } = props;
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Time</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, key) => {
            return (
              <Appointment key={appointment.id} appointment={appointment} />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
