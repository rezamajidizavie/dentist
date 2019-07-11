// import { GET_ERRORS, SET_CURRENT_USER } from "./types";
// import axios from "axios";
// import setAuthToken from "../utils/setAuthToken";
// import jwt_decode from "jwt-decode";

export const reserveUser = userData => dispatch => {
  dispatch({
    type: "SET_USER",
    payload: userData
  });
};
