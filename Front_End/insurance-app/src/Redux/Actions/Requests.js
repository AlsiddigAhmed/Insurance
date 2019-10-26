import Axios from "axios";
import Config from "../../Config/Config";
const { API_URI } = Config;

export function postRequest(id, data) {
  Axios.post(`${API_URI}/api/postrequest/${id}`, data, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  });
}

export function deleteRequest(id) {
  Axios.delete(`${API_URI}/api/deleterequest/${id}`, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  });
}

export function acceptRequest(id) {
  Axios.put(`${API_URI}/api/acceptrequest/${id}`, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  });
}

export function getSellerRequest(id) {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/sellerrequest/${id}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_SELLER_REQUESTS", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_SELLER_REQUESTS_ERROR", payload: err });
      });
  };
}

export function getBuyerRequest(id) {
  return function(dispatch) {
    Axios.get(`${API_URI}/api/buyerrequest/${id}`, {
      headers: { Authorization: `bearer ${localStorage.token}` }
    })
      .then(data => {
        dispatch({ type: "GET_BUYER_REQUESTS", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_BUYER_REQUESTS_ERROR", payload: err });
      });
  };
}

export function sendServiceFile(id, formData) {
  Axios.post(`${API_URI}/api/uploadrequest/${id}`, formData, {
    headers: { Authorization: `bearer ${localStorage.token}` }
  });
}
