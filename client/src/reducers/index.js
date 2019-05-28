import { combineReducers } from "redux";
import therapistsReducer from './therapistsReducer'

const rootReducer = combineReducers({
  therapists:therapistsReducer
});

export default rootReducer
