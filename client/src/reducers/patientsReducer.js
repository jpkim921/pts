
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
    // case "FETCH_THERAPIST":
    //   console.log("from reducer ", action)
    //   return Object.assign({}, state, { loading: false }, {therapist: action.payload});
    // case "CREATING_THERAPIST":
    //   return Object.assign({}, state, { loading: true });
    // case "ADD_THERAPIST":
    // // console.log(action)
    //   return state.therapists.concat(action.payload);
    default:
      return state;
  }
}
