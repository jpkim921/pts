import { combineReducers } from "redux";
import patientsReducer from './patientsReducer'
import appointmentsReducer from './appointmentsReducer'

const rootReducer = combineReducers({
  patients:patientsReducer,
  appointments: appointmentsReducer
});

export default rootReducer
