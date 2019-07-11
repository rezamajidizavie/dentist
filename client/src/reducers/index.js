import {combineReducers} from "redux";
import authReducer from "./authReducer";
import reserveReducer from "./reserveReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  reserve: reserveReducer
});

export default rootReducer;
