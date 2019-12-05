export default function appointmentsReducer(
  state = { loading: false, appointments: [] },
  action
) {
  switch (action.type) {
    case "LOADING_APPOINTMENTS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_APPOINTMENTS":
      return Object.assign(
        {},
        state,
        { loading: false },
        { appointments: action.payload }
      );

    default:
      return state;
  }
}
