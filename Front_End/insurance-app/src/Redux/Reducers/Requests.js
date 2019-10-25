export function getSellerRequests(state = {}, { type, payload }) {
  switch (type) {
    case "GET_SELLER_REQUESTS": {
      return {
        ...state,
        requests: payload.data
      };
    }
    case "GET_SELLER_REQUESTS_ERROR": {
      return {
        ...state,
        error: payload.err
      };
    }

    default: {
      return state;
    }
  }
}

export function getBuyerRequests(state = {}, { type, payload }) {
  switch (type) {
    case "GET_BUYER_REQUESTS": {
      return {
        ...state,
        requests: payload.data
      };
    }
    case "GET_BUYER_REQUESTS_ERROR": {
      return {
        ...state,
        error: payload.err
      };
    }

    default: {
      return state;
    }
  }
}
