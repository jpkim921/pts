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
    case "CREATING_APPOINTMENT":
      return Object.assign({}, state, { loading: true });
    case "CREATE_APPOINTMENT":
      return state.appointments.concat(action.payload);
    default:
      return state;
  }
}
