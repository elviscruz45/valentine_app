import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  post,
  getPosts,
  uploadPost_Photo,
  photo_location,
} from "../actions/post";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  updateCommentField,
  getComments,
  uploadCommentFieldFirestore,
} from "../actions/comments";

function Comments(props) {
  async function uploadPostComment() {
    const upload = {
      user_photo: props.user_photo,
      username: props.user_login,
      date: new Date().getTime(),
      comments: props.comments,
      post_description: props.post_description,
      id: props.id,
      uid: props.uid,
    };
    await props.uploadCommentFieldFirestore(upload);
    await props.getComments();
  }

  // if (props.getAllComments.length <= 0) {
  //   return <ActivityIndicator style={styles.container} />;
  // }
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <FlatList
          data={props.getAllComments}
          keyExtractor={(item) => JSON.stringify(item.date)}
          renderItem={({ item }) => (
            <View>
              <View style={[styles.row, styles.center]}>
                <Image
                  style={styles.roundImage}
                  source={{ uri: item.user_photo }}
                />
                <Text>{item.username}</Text>

                <Text>
                  {new Date(item.date).toLocaleDateString("en-US", {
                    timeZone: "UTC",
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                  })}
                </Text>
                <View>
                  <Text>{item.likerName}</Text>
                </View>
              </View>
              <Text>{item.comments}</Text>
            </View>
          )}
        />
      </SafeAreaView>
      <View style={[styles.row, styles.center]}>
        <TextInput
          value={props.comments}
          style={styles.bordercomment}
          autoCapitalize="none"
          onChangeText={(input) => props.updateCommentField(input)}
          placeholder="Add a comment"
          secureTextEntry={false}
        />
        <TouchableOpacity onPress={() => uploadPostComment()}>
          <MaterialCommunityIcons
            name="comment-arrow-right"
            size={30}
            color="black"
            style={{ marginRight: 30 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const mapStateToProps = (reducers) => {
  return {
    count: reducers.reducer1.count,
    user_login: reducers.user.user_login,
    user_photo: reducers.user.user_photo,
    description_post: reducers.post.description,
    photo_uri: reducers.post.photo_uri,
    bio: reducers.user.bio,
    email: reducers.user.email,
    uid: reducers.user.uid,
    photo_uuid: reducers.post.photo_uuid,
    location: reducers.post.location,
    likes: reducers.post.likes,
    comments: reducers.comments.commentField,
    id: reducers.comments.actualCommentId,
    post_description: reducers.comments.actualPostDescription,
    getAllComments: reducers.comments.comments,
  };
};

export default connect(mapStateToProps, {
  post,
  uploadPost_Photo,
  photo_location,
  getPosts,
  updateCommentField,
  getComments,
  uploadCommentFieldFirestore,
})(Comments);
