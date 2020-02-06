export function fetchPatients() {
  return dispatch => {
    dispatch({ type: "LOADING_PATIENTS" });
    return fetch("/patients")
      .then(response => response.json())
      .then(patients =>
        dispatch({ type: "FETCH_PATIENTS", payload: patients })
      );
  };
}

export function createPatient(patient) { // ACBD
  console.log("C")
  return dispatch => {
    return fetch("/therapists/1/patients", {
      method: "POST",
      body: JSON.stringify({ patient }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(patient =>{
        console.log("D")
        dispatch({ type: "UPDATE_THERAPIST_PATIENTS", payload: patient })
      }
      )
      //.then(patient => console.log("Success:", patient))
      .catch(error => console.error("Error:", error));
  };
  console.log("E")
}

export function updatePatient(patientInfo) {
  return dispatch => {
    dispatch({ type: "UPDATING_THERAPIST_PATIENT" });
    return fetch(
      `/therapists/${patientInfo.therapistId}/patients/${patientInfo.id}`,
      {
        method: "PUT",
        body: JSON.stringify(patientInfo),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(patient =>
        dispatch({ type: "UPDATE_THERAPIST_PATIENT", payload: patient })
      );
  };
}
