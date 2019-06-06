export function fetchPatients() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PATIENTS' });
    return fetch('/patients')
      .then(response => response.json())
      .then(patients => dispatch({ type: 'FETCH_PATIENTS', payload: patients }));
  };
}
