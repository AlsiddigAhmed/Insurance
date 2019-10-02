export function createGig(state = {}, { type, payload }) {
  switch (type) {
    case "CREATE_NEW_GIG": {
      return {
        ...state,
        UserGigs: payload.data
      };
    }
    case "CREATE_NEW_GIG_ERROR": {
      return {
        ...state,
        Err: payload
      };
    }
    default: {
      return state;
    }
  }
}

export function userGigs(state = {}, { type, payload }) {
  switch (type) {
    case "FETCH_ALL_USER_GIGS": {
      return {
        ...state,
        profileGigs: payload.data
      };
    }
    case "FETCH_ALL_USER_GIGS_ERR": {
      return {
        ...state,
        profileGigs: payload
      };
    }
    default: {
      return state;
    }
  }
}

export function pauseGig(state = {}, { type, payload }) {
  switch (type) {
    case "PAUSE_GIG": {
      return {
        ...state,
        newGigState: payload.data
      };
    }
    case "PAUSE_GIG_ERR": {
      return {
        ...state,
        errorUpdatingGigState: payload.err
      };
    }
    default: {
      return state;
    }
  }
}

export function loveGig(state = {}, { type, payload }) {
  switch (type) {
    case "LOVE_GIG": {
      return {
        ...state,
        lovers: payload.data
      };
    }
    case "LOVE_GIG_ERROR": {
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

export function getOneGig(state = {}, { type, payload }) {
  switch (type) {
    case "GET_ONE_GIG": {
      return {
        ...state,
        result: payload.data
      };
    }
    case "GET_ONE_GIG_ERROR": {
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

export function getBestGigsInfo(state = {}, { type, payload }) {
  switch (type) {
    case "GET_BEST_GIG": {
      return {
        ...state,
        bestGigs: payload.data
      };
    }
    case "GET_BEST_GIG_ERROR": {
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
