export function FetchProfileData(state = {}, { type, payload }) {
  switch (type) {
    case "GET_ALL_USER_DATA": {
      return {
        ...state,
        profileData: payload
      };
    }
    case "GET_ALL_USER_DATA_ERROR": {
      return {
        ...state,
        error: payload
      };
    }
    default: {
      return state;
    }
  }
}

export function profileData(state = {}, { type, payload }) {
  switch (type) {
    case "GET_PROFILE_DATA": {
      return {
        ...state,
        profile: payload
      };
    }
    case "GET_PROFILE_DATA_ERROR": {
      return {
        ...state,
        error: payload
      };
    }
    default: {
      return state;
    }
  }
}

export function getAllProfileData(state = {}, { type, payload }) {
  switch (type) {
    case "GET_FULL_PROFILE": {
      return {
        ...state,
        profile: payload
      };
    }
    case "GET_FULL_PROFILE_ERROR": {
      return {
        ...state,
        error: payload
      };
    }
    default: {
      return state;
    }
  }
}
