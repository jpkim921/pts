import { combineReducers } from "redux";
import therapistsReducer from './therapistsReducer'
import patientsReducer from './patientsReducer'

const rootReducer = combineReducers({
  therapists:therapistsReducer,
  patients:patientsReducer
});

export default rootReducer
