import { dbase } from "../config/firebase";

export const post = (text) => (dispatch) => {
  dispatch({
    type: "UPDATE_DESCRIPTION",
    payload: text,
  });
};

export const uploadPost = (post) => async (dispatch) => {
  try {
    console.log(post);
  } catch (error) {
    alert(error.message);
  }
};
