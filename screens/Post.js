import { Text, View, TextInput, Image, TouchableOpacity } from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { post, uploadPost } from "../actions/post";

class Post extends Component {
  uploadPost() {
    console.log(this.props);
    this.props.uploadPost(this.props.upload_post);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("../assets/smcv2.png")}
          style={styles.postPhoto}
        />
        <TextInput
          value={this.props.post.description}
          style={styles.border}
          autoCapitalize="none"
          onChangeText={(input) => this.props.post(input)}
          placeholder="descriptions"
          secureTextEntry={false}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.uploadPost()}
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
  };
};

export default connect(mapStateToProps, { post, uploadPost })(Post);
