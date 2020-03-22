import { searchActor } from "../api/api";
import { LOAD_AUTHOR, IS_LOADING_AUTHOR } from "./types";

export const getAuthor = (actor, dispatch) => {
  dispatch({
    type: IS_LOADING_AUTHOR,
  });

  return searchActor(actor).then(actors => {
    dispatch({
      type: LOAD_AUTHOR,
      payload: actors,
    });
  });
};
