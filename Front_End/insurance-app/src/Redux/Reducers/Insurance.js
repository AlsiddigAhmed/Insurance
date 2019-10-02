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
