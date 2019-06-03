import React from "react";

export default function Therapist(props) {
  return (
    <div style={{ border: "1px solid" }}>
      TEST FROM THERAPIST COMPONENT
      <h3>{props.therapist.name}</h3>
      <h3>{props.therapist.email}</h3>
      <h3>{props.therapist.phone}</h3>
      <h3>{props.therapist.discipline}</h3>
    </div>
  );
}
