import {SET_CURRENT_USER} from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

// Login - Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/reserve/admin", userData)
    .then(res => {
      // Save to localStorage
      const {token} = res.data;
      // Set token to localStorage
      localStorage.setItem("jwtToken", token);
      // set token to Auth default header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set Current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data
      // })
      console.log(err)
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
