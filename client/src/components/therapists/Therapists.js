// import React, { Component } from 'react';
//
//
//
// class Therapists extends Component {
//
//   render(){
//
//     const renderTherapists = this.props.therapists.map( (therapist) => {
//       return(
//         <div key={therapist.id}>
//         <h3>{therapist.name}</h3>
//         </div>
//       )
//     })
//
//     return(
//       <div>
//       TEST from THERAPISTS
//       {renderTherapists}
//       </div>
//     )
//   }
// }
//
// export default Therapists

import React from "react";

const Therapists = props => {
  // debugger;
  const therapists = props.therapists.map((therapist, index) => {
    return (
      <div key={index} style={{border:"1px solid"}}>
        <h3>{therapist.name}</h3>
        <h3>{therapist.email}</h3>
        <h3>{therapist.phone}</h3>
        <h3>{therapist.discipline}</h3>
      </div>
    );
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
