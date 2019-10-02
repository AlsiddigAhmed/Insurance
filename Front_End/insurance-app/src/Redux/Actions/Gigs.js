import Axios from "axios";
import Config from "../../Config/Config";
const { API_URI } = Config;
export function createGig(ProfileId, UserId, formData) {
  return function(dispatch) {
    Axios.post(
      `${API_URI}/api/gig/creategig/${ProfileId}/${UserId}`,
      formData,
      {
        headers: { Authorization: `bearer ${localStorage.token}` }
      }
    )
      .then(result => {
        dispatch({ type: "CREATE_NEW_GIG", payload: result });
      })
      .catch(err => {
        dispatch({ type: "CREATE_NEW_GIG_ERROR", payload: err });
      });
  };
}

export function userGigs(ProfileId) {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/gig/allprofilegigs/${ProfileId}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(result => {
        dispatch({ type: "FETCH_ALL_USER_GIGS", payload: result });
      })
      .catch(err => {
        dispatch({ type: "FETCH_ALL_USER_GIGS_ERR", payload: err });
      });
  };
}

export function pauseGig(gigId, gigStatus) {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/gig/pause/${gigId}/${gigStatus}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(result => {
        dispatch({ type: "PAUSE_GIG", payload: result });
      })
      .catch(err => {
        dispatch({ type: "PAUSE_GIG_ERR", payload: err });
      });
  };
}

export function loveGig(gigId, profileId, love) {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/giglove/${profileId}/${gigId}/${love}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(result => {
        dispatch({ type: "LOVE_GIG", payload: result });
      })
      .catch(err => {
        dispatch({ type: "LOVE_GIG_ERROR", payload: err });
      });
  };
}

export function getOneGig(GigId) {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/getgig/${GigId}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(result => {
        dispatch({ type: "GET_ONE_GIG", payload: result });
      })
      .catch(err => {
        dispatch({ type: "GET_ONE_GIG_ERROR", payload: err });
      });
  };
}

export function getBestGigsInfo() {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/bestgigs/`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_BEST_GIG", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_BEST_GIG_ERROR", payload: err });
      });
  };
}
