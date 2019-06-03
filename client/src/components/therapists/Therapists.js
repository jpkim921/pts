import React from "react";
import Therapist from "./Therapist";

const Therapists = props => {
  // debugger;
  const therapists = props.therapists.map((therapist, index) => {
    return <Therapist key={index} therapist={therapist}/>;
  });
  // console.log(props)
  // console.log(props.therapists)
  return (
    <div>
      <h3>Therapists</h3>
      {therapists}
    </div>
  );
};

export default Therapists;
