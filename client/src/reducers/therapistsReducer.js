
export default function therapistsReducer(
  state = { loading: false, therapists: [], therapist:[] },
  action
) {
  switch (action.type) {
    //fetch all therapists
    case "LOADING_THERAPISTS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_THERAPISTS":
      // console.log(action)
      return Object.assign({}, state, { loading: false }, {therapists: action.payload});
    // fetch a therapist
    case "LOADING_THERAPIST":
      return Object.assign({}, state, { loading: true });
    case "FETCH_THERAPIST":
      console.log("from reducer ", action)
      return Object.assign({}, state, { loading: false }, {therapist: action.payload});
    case "CREATING_THERAPIST":
      return Object.assign({}, state, { loading: true });
    case "ADD_THERAPIST":
    // console.log(action)
      return state.therapists.concat(action.payload);
    default:
      return state;
  }
}
