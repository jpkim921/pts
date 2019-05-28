import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TherapistContainer from './containers/TherapistContainer'
import Therapists from './components/therapists/Therapists'
import { connect } from 'react-redux'
import { fetchTherapists } from './actions/therapistActions'


class App extends Component {

  componentDidMount () {
    this.props.fetchTherapists();
  }

  render() {
    return (
      <div className="App">
        <TherapistContainer />
        <Therapists therapists={this.props.therapists}/>
      </div>
    );
  }
}

//
// function App() {
//   return (
//     <div className="App">
//       <TherapistContainer />
//     </div>
//   );
// }

const mapStateToProps = (state) => {
  return {
    therapists: state.therapists.therapists
  }
}

const mapDispatchToProps = ({
 fetchTherapists
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
