import { dbase, storage } from "../config/firebase";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  updateDoc,
  serverTimestamp,
  arrayUnion,
  arrayRemove,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { v4 as uuidv4 } from "uuid";

export const updateCommentField = (text) => (dispatch) => {
  console.log(text);
  dispatch({
    type: "UPDATE_COMMENT_FIELD",
    payload: text,
  });
};

export const actualCommentId = (id) => (dispatch) => {
  dispatch({
    type: "ACTUAL_COMMENT_ID",
    payload: id,
  });
};

export const actualPostDescription = (postDescription) => (dispatch) => {
  dispatch({
    type: "ACTUAL_COMMENT_POST_DESCRIPTION",
    payload: postDescription,
  });
};

export const uploadCommentFieldFirestore = (post) => async (dispatch) => {
  try {
    const uuid = uuidv4();

    const Ref = doc(dbase, "posts", post.id);
    await updateDoc(Ref, {
      comments: arrayUnion(uuid),
    });

    await setDoc(doc(dbase, "comments", uuid), {
      user_photo: post.user_photo,
      username: post.username,
      date: post.date,
      comments: post.comments,
      post_description: post.post_description,
      id: post.id,
      uid: post.uid,
      type: "COMMENT",
      commentId: uuid,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getComments = (id) => async (dispatch) => {
  // we have to call all posts in dbase, so id it is no required
  const querySnapshot = await getDocs(collection(dbase, "comments"));
  const post_array = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    post_array.push(doc.data());
  });
  console.log(post_array);

  if (post_array) {
    dispatch({
      type: "GET_ALL_COMMENTS_SUCCESS",
      payload: post_array,
    });
  } else {
    alert("No registered");
  }
};
