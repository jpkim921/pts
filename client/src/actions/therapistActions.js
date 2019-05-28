export function fetchTherapists() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_THERAPISTS' });
    return fetch('/therapists')
      .then(response => response.json())
      .then(responseJson => dispatch({ type: 'FETCH_THERAPISTS', payload: responseJson }));      
  };
}
