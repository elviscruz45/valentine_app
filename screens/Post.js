import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { post, uploadPost } from "../actions/post";
import { storage } from "../config/firebase";
import { ref, uploadBytes } from "firebase/storage";

class Post extends Component {
  async uploadPost1() {
    const { user_login, upload_post, bio, email, uid } = this.props;
    const upload = {
      postPhoto:
        "https://firebasestorage.googleapis.com/v0/b/valentine-app-ac496.appspot.com/o/images6.jpeg?alt=media&token=e1cb22c1-925e-4cfa-8906-8556f6276ec2",
      postDescription: upload_post,
      bio: bio,
      uid: uid,
      photo: "download url",
      username: user_login,
      email: email,
    };
    this.props.uploadPost(upload);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={{
            uri: "https://firebasestorage.googleapis.com/v0/b/valentine-app-ac496.appspot.com/o/images6.jpeg?alt=media&token=e1cb22c1-925e-4cfa-8906-8556f6276ec2",
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
    bio: reducers.user.bio,
    email: reducers.user.email,
    uid: reducers.user.uid,
  };
};

export default connect(mapStateToProps, { post, uploadPost })(Post);
