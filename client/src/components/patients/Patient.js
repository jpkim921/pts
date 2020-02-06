import React from "react";
import { Link } from "react-router-dom";



export default class Patient extends React.Component{
  state = {
    likes: 0
  }

 

  handleLike = () => {
  this.setState({
    likes: this.state.likes + 1
  });
  }



  render() {  
    console.log(this.state)
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <Link
            className="text-decoration-none text-reset"
            to={{
              pathname: `/patients/${this.props.patient.id}`,
              updatePatient: this.props.updatePatient,
              state: { ...this.props.patient, therapistId: this.props.therapistId }
            }}
          >
            <h5 className="card-title">{this.props.patient.name}</h5>
          </Link>
          <h6 className="card-subtitle mb-2 text-muted">
            {`Phone: (${this.props.patient.phone.slice(
              0,
              3
            )})-${this.props.patient.phone.slice(3, 6)}-${this.props.patient.phone.slice(
              6,
              10
            )}`}
          </h6>
          <button onClick={this.handleLike}>Like</button>
            <p>{this.state.likes}</p>
        </div>
      </div>
    </div>
  );
  }
} 



// export const Patient = this.props => {
//   return (
//     <div className="container">
//       <div className="card">
//         <div className="card-body">
//           <Link
//             className="text-decoration-none text-reset"
//             to={{
//               pathname: `/patients/${this.props.patient.id}`,
//               updatePatient: this.props.updatePatient,
//               state: { ...this.props.patient, therapistId: this.props.therapistId }
//             }}
//           >
//             <h5 className="card-title">{this.props.patient.name}</h5>
//           </Link>
//           <h6 className="card-subtitle mb-2 text-muted">
//             {`Phone: (${this.props.patient.phone.slice(0,3)})-${this.props.patient.phone.slice(3, 6)}-${this.props.patient.phone.slice(6,10)}`}
//           </h6>
//           <button></button>
//         </div>
//       </div>
//     </div>
//   );
// };