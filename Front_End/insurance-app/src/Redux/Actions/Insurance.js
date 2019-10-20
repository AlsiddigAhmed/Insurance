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
