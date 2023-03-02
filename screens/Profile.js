import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import { connect } from "react-redux";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>Profile 2222</Text>
      <Text>{props.count}</Text>
      <Text>{props.user_login}</Text>
      <Text>{props.bio}</Text>
      <Text>{props.email}</Text>
    </View>
  );
}

const mapStateToProps = (reducers) => {
  return {
    count: reducers.reducer1.count,
    user_login: reducers.user.user_login,
    bio: reducers.user.bio,
    email: reducers.user.email,
  };
};

export default connect(mapStateToProps)(Profile);
