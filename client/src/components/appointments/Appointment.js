import React, {Component} from 'react'


export default function Appointment (props) {
    let{appointment} = props

    return (
        <tr scope="row">
          <td>{appointment.date}</td>
          <td>{appointment.time}</td>
        </tr>
    );
}