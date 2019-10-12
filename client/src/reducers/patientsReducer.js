
export default function patientsReducer(
  state = { loading: false, patients: [] },
  action
) {
  switch (action.type) {
    //fetch all patients
    case "LOADING_PATIENTS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_PATIENTS":
      console.log(action)
      return Object.assign({}, state, { loading: false }, {patients: action.payload});
    case "LOADING_PATIENT":
      return Object.assign({}, state, { loading: true });
    case "UPDATING_PATIENT":
      return Object.assign({}, state, { loading: true });
    case "UPDATE_PATIENT":
      console.log(action.payload)
    default:
      return state;
  }
}
