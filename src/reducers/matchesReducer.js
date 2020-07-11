import { FETCH_MATCHES } from "../actions/types";

const matchesReducer = (state = { matches: [] }, action) => {
  const { payload, type } = action;

  switch (type) {
    case FETCH_MATCHES:
      return {
        ...state,
        matches: payload,
      };

    default:
      return state;
  }
};

export default matchesReducer;
