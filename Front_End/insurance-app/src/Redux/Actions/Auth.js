import axios from "axios";
import config from "../../Config/Config";
const { API_URI } = config;
export function Login({ Name, Password }) {
  return function(dispatch) {
    axios
      .post(API_URI + "/login", { Name, Password })
      .then(res => {
        dispatch({ type: "USER_LOGIN", payload: res });
        // localStorage.clear();
        localStorage.token = res.data.token;
        localStorage.user = res.data.user.Name;
        localStorage.phone = res.data.user.Phone;
        localStorage.id = res.data.user._id;
      })
      .catch(err => {
        dispatch({ type: "USER_LOGIN_ERR", payload: err });
      });
  };
}

export function Signup(payload) {
  return function(dispatch) {
    axios
      .post(API_URI + "/signup", payload)
      .then(res => {
        dispatch({ type: "USER_SIGNUP", payload: res });
      })
      .catch(err => {
        dispatch({ type: "USER_SIGNUP_ERR", payload: err });
      });
  };
}

export function getCountries() {
  return function(dispatch) {
    axios
      .get(API_URI, +"/api/countries")
      .then(res => {
        dispatch({ type: "GET_COUNTRIES", payload: res });
      })
      .catch(err => {
        dispatch({ type: "GET_COUNTRIES_ERR", payload: err });
      });
  };
}
