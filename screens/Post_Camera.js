import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { post } from "../actions/post";
import { uploadPost_Photo } from "../actions/post";

class Post_Camera extends Component {
  async uploadPost1() {
    const { user_login, upload_post, bio, email, uid, photo_uri, photo_uuid } =
      this.props;
    const upload = {
      postPhoto: photo_uri,
      postDescription: upload_post,
      bio: bio,
      uid: uid,
      photo: "download url",
      username: user_login,
      email: email,
      photo_uuid: photo_uuid,
    };
    this.props.uploadPost_Photo(upload);
    this.props.navigation.navigate("Home");
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: this.props.photo_uri,
          }}
          style={styles.postPhoto}
        />
        <TextInput
          value={this.props.upload_post}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.post(input)}
          placeholder="descriptions"
          secureTextEntry={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.uploadPost1()}
        >
          <Text>Post</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    count: reducers.reducer1.count,
    user_login: reducers.user.user_login,
    upload_post: reducers.post.description,
    photo_uri: reducers.post.photo_uri,
    bio: reducers.user.bio,
    email: reducers.user.email,
    uid: reducers.user.uid,
    photo_uuid: reducers.post.photo_uuid,
  };
};

export default connect(mapStateToProps, { post, uploadPost_Photo })(
  Post_Camera
);
