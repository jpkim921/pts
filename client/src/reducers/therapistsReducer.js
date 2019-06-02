
export default function therapistsReducer(
  state = { loading: false, therapists: [] },
  action
) {
  switch (action.type) {
    case "LOADING_THERAPISTS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_THERAPISTS":
      console.log(action)
      return {loading:false, therapists: action.payload}
    case "CREATING_THERAPISTS":
      return Object.assign({}, state, { loading: true });
    case "ADD_THERAPIST":
    console.log(action)
      return state.therapists.concat(action.payload);
    default:
      return state;
  }
}
