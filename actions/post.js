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
import { v4 as uuidv4 } from "uuid";

export const post = (text) => (dispatch) => {
  dispatch({
    type: "UPDATE_DESCRIPTION",
    payload: text,
  });
};

export const uploadPost = (upload) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(dbase, "posts"), upload);
    const new_upload = { ...upload, id: docRef.id };
    const washingtonRef = doc(dbase, "posts", docRef.id);
    await updateDoc(washingtonRef, new_upload);
  } catch (error) {
    alert(error.message);
  }
};

export const getPosts = () => async (dispatch) => {
  // we have to call all posts in dbase, so id it is no required
  const querySnapshot = await getDocs(collection(dbase, "posts"));
  const post_array = [];
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    post_array.push(doc.data());
  });

  if (post_array) {
    dispatch({
      type: "GET_POSTS_SUCCESS",
      payload: post_array,
    });
  } else {
    alert("No registered");
  }
};

export const savePhotoUri = (uri) => async (dispatch) => {
  try {
    dispatch({
      type: "SAVE_PHOTO_URI",
      payload: uri,
    });
  } catch (error) {
    alert(error.message);
  }
};

export const uploadPost_Photo = (upload) => async (dispatch) => {
  try {
    const docRef = await addDoc(collection(dbase, "posts"), upload);
    const uuid = uuidv4();
    const new_upload = {
      ...upload,
      id: docRef.id,
      photo_uuid: uuid,
      timestamp: serverTimestamp(),
    };
    const washingtonRef = doc(dbase, "posts", docRef.id);
    await updateDoc(washingtonRef, new_upload);

    // to upload a photo in the firebase storage
    // dispatch({
    //   type: "SET_PHOTO_STORAGE_UUID",
    //   payload: uuid,
    // });
    const storageRef = ref(storage, `${uuid}`);
    fetch(upload.postPhoto)
      .then((response) => response.blob())
      .then((blob) => uploadBytes(storageRef, blob))
      .then((snapshot) => {
        return getDownloadURL(storageRef);
      })
      .then((url) => {
        const new_upload2 = {
          ...upload,
          id: docRef.id,
          photo_uuid: uuid,
          postPhoto: url,
        };
        const Ref2 = doc(dbase, "posts", docRef.id);
        updateDoc(Ref2, new_upload2);
        alert("your post have been uploaded");
        // dispatch({
        //   type: "ADDING_NEW_POST",
        //   payload: new_upload2,
        // });
        dispatch({
          type: "UPDATE_DESCRIPTION",
          payload: "",
        });
      })
      .catch((error) => {
        console.log(error.code);
      });

    ("Completed");
  } catch (error) {
    alert(error.message);
  }
};

export const photo_location = (loc) => (dispatch) => {
  dispatch({
    type: "UPDATE_LOCATION",
    payload: loc,
  });
};

export const likePost = (post, uid) => async (dispatch) => {
  try {
    const Ref = doc(dbase, "posts", post.id);
    await updateDoc(Ref, {
      likes: arrayUnion(uid),
    });
    const activityId = `${post.uid}+auth+${post.id}`;

    await setDoc(doc(dbase, "activity", activityId), {
      postId: post.id,
      postDescription: post.postDescription,
      postPhoto: post.postPhoto,
      likerId: post.uid,
      likerPhoto: post.photo,
      likerName: post.username,
      uid: post.id,
      date: new Date().getTime(),
      type: "LIKE",
    });
  } catch (error) {
    console.error(error);
  }
};

export const unlikePost = (post, uid) => async (dispatch) => {
  try {
    const Ref = doc(dbase, "posts", post.id);
    const activityId = `${post.uid}+auth+${post.id}`;

    await updateDoc(Ref, {
      likes: arrayRemove(uid),
    });
    await deleteDoc(doc(dbase, "activity", activityId));

    // await Promise.resolve(getPosts());
  } catch (error) {
    console.error(error);
  }
};
