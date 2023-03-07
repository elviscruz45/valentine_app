import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import styles from "../styles";
import { connect } from "react-redux";
import { add1, subtract1 } from "../actions";
import { logout } from "../actions/user";
import { getPosts } from "../actions/post";
import { post, uploadPost } from "../actions/post";
import {
  AntDesign,
  MaterialCommunityIcons,
  FontAwesome,
} from "@expo/vector-icons";

class Home extends React.Component {
  componentDidMount() {
    this.props.getPosts();
  }
  render() {
    if (this.props.post_list === null) return null;
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomWidth: 2,
            borderBottomColor: "#DFDFDF",
            margin: 2,
          },
        ]}
      >
        <FlatList
          data={this.props.post_list}
          renderItem={({ item }) => (
            <View
              style={{
                borderBottomWidth: 2,
                borderBottomColor: "#E35622",
                margin: 2,
              }}
            >
              <View style={[styles.row, styles.center]}>
                <View style={[styles.row, styles.center]}>
                  <Image
                    source={{ uri: this.props.equipment_photo }}
                    style={styles.roundImage}
                  />
                  <Text>{this.props.equipmentname}</Text>
                  <Text>{"          "}</Text>
                  <Image
                    source={{ uri: this.props.user_photo }}
                    style={styles.roundImage}
                  />
                  <Text>{item.username}</Text>
                </View>
              </View>
              <View style={[styles.row, styles.center]}>
                <Text style={{ margin: 5, color: "#5B5B5B" }}>
                  {"Date: March 07, 2023 17:00 Hr "}
                </Text>
                <Text style={{ margin: 5, color: "black" }}>
                  {"2 photos more ...  "}
                </Text>
              </View>
              <View>
                <Image
                  source={{ uri: item.postPhoto }}
                  style={styles.postPhoto}
                />

                <View style={styles.row}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <AntDesign
                      style={{ margin: 10 }}
                      name="like2"
                      size={24}
                      color="black"
                    />
                    <Text>15 Likes</Text>
                  </View>
                  <MaterialCommunityIcons
                    style={{ margin: 10, marginLeft: 90 }}
                    name="comment-text-outline"
                    size={24}
                    color="black"
                  />
                  <FontAwesome
                    style={{ margin: 10, marginLeft: 120 }}
                    name="send-o"
                    size={24}
                    color="black"
                  />
                </View>
                <Text style={{ margin: 10 }}>{item.postDescription}</Text>
              </View>
              <Text></Text>
            </View>
          )}
        />
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
    user_photo: reducers.user.user_photo,
    email: reducers.user.email,
    uid: reducers.user.uid,
    post_list: reducers.post.post_list,
    equipment_photo: reducers.user.equipment_photo,
    equipmentname: reducers.user.equipmentname,
  };
};

export default connect(mapStateToProps, {
  add1,
  subtract1,
  logout,
  post,
  uploadPost,
  getPosts,
})(Home);
