import axios from "axios";
import config from "../../Config/Config";
export function getPackages() {
  return function(dispatch) {
    axios
      .get(config.API_URI + "/api/packages", {
        headers: { Authorization: `bearer ${localStorage.token}` }
      })
      .then(data => {
        dispatch({ type: "GET_INSURANCE_PACKAGES", payload: data.data });
      })
      .catch(err => {
        dispatch({ type: "GET_INSURANCE_PACKAGES_ERROR", payload: err });
      });
  };
}

export function insuranceSubscripe(ProfileId, PackageId) {
  return function(dispatch) {
    axios
      .post(config.API_URI + `/api/subscripe/${ProfileId}/${PackageId}`, {
        headers: { Authorization: `bearer ${localStorage.token}` }
      })
      .then(data => {
        dispatch({ type: "INSURANCE_SUBSCRIPTION", payload: data });
      })
      .catch(err => {
        dispatch({ type: "INSURANCE_SUBSCRIPTION_ERROR", payload: err });
      });
  };
}

export function getUserInsurance(ProfileId) {
  return function(dispatch) {
    axios
      .get(config.API_URI + `/api/getuserinsurance/${ProfileId}`, {
        headers: { Authorization: `bearer ${localStorage.token}` }
      })
      .then(data => {
        dispatch({ type: "GET_USER_INSURANCE", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_USER_INSURANCE_ERROR", payload: err });
      });
  };
}
