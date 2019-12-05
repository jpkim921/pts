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


export function createAppointment(appointment) {
  return dispatch => {
    dispatch({ type: "CREATING_APPOINTMENT" });
    return fetch("/appointments", {
      method: "POST",
      body: JSON.stringify({ appointment }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      // .then(appointment => console.log(appointment))
      .then(appointment =>
        dispatch({ type: "CREATE_APPOINTMENT", payload: appointment })
      )
  };
}