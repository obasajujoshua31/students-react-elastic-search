import { LOAD_AUTHOR, IS_LOADING_AUTHOR } from "./types";

export default (state, action) => {
  switch (action.type) {
    case LOAD_AUTHOR: {
      return { ...state, actors: action.payload, isLoading: false };
    }
    case IS_LOADING_AUTHOR: {
      return { ...state, isLoading: true };
    }
    default:
      return state;
  }
};
