import React from "react";
import Therapist from "./Therapist";

const Therapists = props => {
  const therapists = props.therapists.map((therapist, index) => {
    return <Therapist key={index} therapist={therapist} />;
  });
  return (
    <div>
      <h3>Therapists</h3>
      {therapists}
    </div>
  );
};

export default Therapists;
