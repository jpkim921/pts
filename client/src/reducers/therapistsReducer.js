
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
    default:
      return state;
  }
}
