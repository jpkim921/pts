export function fetchAppointments() {
  return dispatch => {
    dispatch({ type: "LOADING_APPOINTMENTS" });
    return fetch("/appointments")
      .then(response => response.json())
      .then(appointments =>
        dispatch({ type: "FETCH_APPOINTMENTS", payload: appointments })
      );
  };
}
