import Axios from "axios";
import Config from "../../Config/Config";

export function getAllUserData(id) {
  return function(dispatch) {
    Axios.get(`${Config.API_URI}/api/profile/getalldata/${id}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_ALL_USER_DATA", payload: data.data });
      })
      .catch(err => {
        dispatch({ type: "GET_ALL_USER_DATA_ERROR", payload: err });
      });
  };
}

export function getProfile(id) {
  return function(dispatch) {
    Axios.get(`${Config.API_URI}/api/profile/${id}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_PROFILE_DATA", payload: data.data });
      })
      .catch(err => {
        dispatch({ type: "GET_PROFILE_DATA_ERROR", payload: err });
      });
  };
}
