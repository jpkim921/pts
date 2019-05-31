


export function fetchTherapists() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_THERAPISTS' });
    return fetch('/therapists')
      .then(response => response.json())
      .then(responseJson => dispatch({ type: 'FETCH_THERAPISTS', payload: responseJson }));
  };
}

export function createTherapist(data) {
  return (dispatch) => {
    dispatch({ type: 'CREATING_THERAPIST' });
    return fetch('/therapists', {
      method: 'POST',
      body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
    // .then(therapist => dispatch(addTherapist(therapist)))
    .then(therapist => console.log('Success:', therapist))
    .catch(error => console.error('Error:', error));
      // .then(responseJson => dispatch({ type: 'FETCH_THERAPISTS', payload: responseJson }));
  };
}
