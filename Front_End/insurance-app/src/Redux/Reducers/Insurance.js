export function NewInsurance(state = {}, { type, payload }) {
  switch (type) {
    case "INSURANCE": {
      return {
        ...state
      };
      // break;
    }
    case "INSURANCE_ERR": {
      return {
        ...state
      };
      // break;
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
