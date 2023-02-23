export const updateUsername = (username) => (dispatch) => {
  dispatch({
    type: "UPDATE_USERNAME",
    payload: username,
  });
};

export const updateEmail = (email) => (dispatch) => {
  dispatch({
    type: "UPDATE_EMAIL",
    payload: email,
  });
};

export const updatePassword = (password) => (dispatch) => {
  dispatch({
    type: "UPDATE_PASSWORD",
    payload: password,
  });
};

export const updateBio = (bio) => (dispatch) => {
  dispatch({
    type: "UPDATE_BIO",
    payload: bio,
  });
};
