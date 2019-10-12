export function fetchPatients() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PATIENTS' });
    return fetch('/patients')
      .then(response => response.json())
      .then(patients => dispatch({ type: 'FETCH_PATIENTS', payload: patients }));
  };
}

export function createPatient(patient) {
  return (dispatch) => {
    return fetch('/patients', {
      method: 'POST',
      body: JSON.stringify({patient}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(patient => dispatch ({ type: "UPDATE_THERAPIST_PATIENTS", payload: patient}))
    .then(patient => console.log('Success:', patient))
    .catch(error => console.error('Error:', error));
  };
}

export function updatePatient(id, patientInfo) {
  return dispatch => {
    dispatch({ type: "UPDATING_PATIENT" });
    return (
      // fetch(`/patients/${id}`, {
        return fetch(`/therapists/1/patients/${id}`, {
        method: "PUT",
        body: JSON.stringify({ patientInfo }),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(patient => console.log(patient.patientInfo))
        // .then(patient => dispatch({
        //   type: "UPDATE_PATIENT",
        //   payload: patientInfo
        // })
        // .then(patient => console.log('Success:', patient))
        // .catch(error => console.error('Error:', error))
    );
  };
}

const updatePatientAction = patientInfo => {
  return {
    type: "UPDATE_PATIENT",
    payload: patientInfo
  };
};
