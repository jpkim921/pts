export default function therapistsReducer(
  state = { loading: false, therapist: [], patients: [] },
  action
) {
  switch (action.type) {
    //fetch all therapists
    case "LOADING_THERAPISTS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_THERAPISTS":
      // console.log(action)
      return Object.assign(
        {},
        state,
        { loading: false },
        { therapists: action.payload }
      );
    // fetch a therapist
    case "LOADING_THERAPIST":
      return Object.assign({}, state, { loading: true });
    case "FETCH_THERAPIST":
      return Object.assign(
        {},
        state,
        { loading: false },
        { therapist: action.payload },
        { patients: action.payload.patients }
      );
    case "CREATING_THERAPIST":
      return Object.assign({}, state, { loading: true });
    case "ADD_THERAPIST":
      return state.therapists.concat(action.payload);
    case "UPDATE_THERAPIST_PATIENTS":
      return Object.assign({}, state, {
        patients: state.patients.concat(action.payload)
      });
    case "UPDATING_THERAPIST_PATIENT":
      return Object.assign({}, state, { loading: true });
    case "UPDATE_THERAPIST_PATIENT":
      console.log(action.payload);
      let updatedPatient = action.payload;
      let patients = state.patients;
      patients = findAndReplacePatient(patients, updatedPatient);
      return Object.assign(
        {},
        state,
        { loading: false },
        { patients: patients }
      );
    default:
      return state;
  }
}

const findAndReplacePatient = (patients, updatedPatient) => {
  for (let i = 0; i < patients.length; i++) {
    if (updatedPatient.id === patients[i].id) {
      patients[i] = updatedPatient;
    } else {
      continue;
    }
  }
  return patients;
};
