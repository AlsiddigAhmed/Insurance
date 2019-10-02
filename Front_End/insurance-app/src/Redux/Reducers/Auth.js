export function Login(state = {}, { type, payload }) {
  switch (type) {
    case "USER_LOGIN": {
      return {
        ...state,
        user: payload.data
      };
      // break;
    }
    case "USER_LOGIN_ERR": {
      return {
        ...state,
        error: payload.err
      };
      // break;
    }
    default: {
      return state;
    }
  }
}

export function Signup(state = {}, { type, payload }) {
  switch (type) {
    case "USER_SIGNUP": {
      return {
        ...state,
        signup: payload.data
      };
    }
    case "USER_SIGNUP_ERR": {
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

export function getCountries(state = {}, { type, payload }) {
  switch (type) {
    case "GET_CONTRIES": {
      return {
        ...state,
        countries: payload.data
      };
    }
    case "GET_CONTRIES_ERR": {
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
