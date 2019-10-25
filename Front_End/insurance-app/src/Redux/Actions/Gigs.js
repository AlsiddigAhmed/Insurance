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

export function getGigById(gigId) {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/getgigbyid/${gigId}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_GIG_BY_ID", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_GIG_BY_ID_ERROR", payload: err });
      });
  };
}

export function updateOverview(id, data) {
  Axios.post(`${API_URI}/api/updateoverview/${id}`, data, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  })
    .then(data => {})
    .catch(err => {});
}

export function updatePricing(id, data) {
  Axios.post(`${API_URI}/api/updatepricing/${id}`, data, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  })
    .then(data => {})
    .catch(err => {});
}

export function updateDesc(id, data) {
  Axios.post(`${API_URI}/api/updatedescription/${id}`, data, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  })
    .then(data => {})
    .catch(err => {});
}

export function deleteGig(id) {
  Axios.post(`${API_URI}/api/deletegig/${id}`, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  })
    .then(data => {})
    .catch(err => {});
}

export function getLatestMobileGigs() {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/getlatestmobilegigs/`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_LATEST_MOBILE_GIGS", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_LATEST_MOBILE_GIGS_ERROR", payload: err });
      });
  };
}

export function getLatestWebGigs() {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/getlatestwebgigs/`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_LATEST_WEB_GIGS", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_LATEST_WEB_GIGS_ERROR", payload: err });
      });
  };
}
export function getLatestApiGigs() {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/getlatestapigigs/`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_LATEST_API_GIGS", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_LATEST_API_GIGS_ERROR", payload: err });
      });
  };
}
export function getLatestDesktopGigs() {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/getlatestdesktopgigs/`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_LATEST_DESKTOP_GIGS", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_LATEST_DESKTOP_GIGS_ERROR", payload: err });
      });
  };
}
export function getLatestSoftwareGigs() {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/getlatestsoftwaregigs/`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_LATEST_SOFTWARE_GIGS", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_LATEST_SOFTWARE_GIGS_ERROR", payload: err });
      });
  };
}
