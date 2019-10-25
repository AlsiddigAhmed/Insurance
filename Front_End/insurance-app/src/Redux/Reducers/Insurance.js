export function insuranceSubscripe(state = {}, { type, payload }) {
  switch (type) {
    case "INSURANCE_SUBSCRIPTION": {
      return {
        ...state,
        insurance: payload
      };
    }
    case "INSURANCE_SUBSCRIPTION_ERROR": {
      return {
        ...state,
        err: payload.err
      };
    }
    default: {
      return { ...state };
    }
  }
}

export function getPackages(state = {}, { type, payload }) {
  switch (type) {
    case "GET_INSURANCE_PACKAGES": {
      return {
        ...state,
        packages: payload
      };
    }
    case "GET_INSURANCE_PACKAGES_ERROR": {
      return {
        ...state,
        err: payload.err
      };
    }
    default: {
      return state;
    }
  }
}

export function getInsurance(state = {}, { type, payload }) {
  switch (type) {
    case "GET_USER_INSURANCE": {
      return {
        ...state,
        insurance: payload
      };
    }
    case "GET_USER_INSURANCE_ERROR": {
      return {
        ...state,
        err: payload.err
      };
    }
    default: {
      return state;
    }
  }
}
