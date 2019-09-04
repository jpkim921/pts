const addTherapist = (therapist) => {
  return {
    type: "ADD_THERAPIST",
    payload: therapist
  }
}


export function fetchTherapists() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_THERAPISTS' });
    return fetch('/therapists')
    // return fetch('/therapists')
      .then(response => response.json())
      .then(responseJson => dispatch({ type: 'FETCH_THERAPISTS', payload: responseJson }));
  };
}

export function fetchTherapist(therapist) {

  return (dispatch) => {
    dispatch({ type: 'LOADING_THERAPIST' });

    // fetchTherapist uses POST action to send the data from Login form
    return fetch('/therapist', {
    // return fetch('/therapists', {
      method: 'POST',
      body: JSON.stringify(therapist),
      headers:{
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      // .then(therapist => console.log(therapist))
      .then(therapist => dispatch({ type: 'FETCH_THERAPIST', payload: therapist }));
  };

}

export function createTherapist(therapist) {
  return (dispatch) => {
    return fetch('/therapists', {
    // return fetch('/therapists', {
      method: 'POST',
      body: JSON.stringify({therapist}),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    .then(therapist => dispatch(addTherapist(therapist)))
    .then(therapist => console.log('Success:', therapist))
    .catch(error => console.error('Error:', error));
      // .then(responseJson => dispatch({ type: 'FETCH_THERAPISTS', payload: responseJson }));
  };
}
