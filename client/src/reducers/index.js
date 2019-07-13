import {combineReducers} from "redux";
import authReducer from "./authReducer";
import reserveReducer from "./reserveReducer";
import errorReducer from "./errorReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  reserve: reserveReducer,
  errors: errorReducer
});

export default rootReducer;
