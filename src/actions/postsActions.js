import { types } from "./types";
import { getPosts } from "../api";

export const fetchPosts = () => async dispatch => {
  await getPosts().then(res =>
      dispatch({
        type: types.GET_POSTS,
        payload: res.data
      })
    )
    .then(err => console.log(err));
};
