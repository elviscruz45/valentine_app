import { View, Text } from "react-native";
import React from "react";
import styles from "../styles";
import { connect } from "react-redux";

function Profile(props) {
  return (
    <View style={styles.container}>
      <Text>Profile 2222</Text>
      <Text>{props.auth}</Text>
    </View>
  );
}

const mapStateToProps = (reducers) => {
  return reducers.reducer1;
};

export default connect(mapStateToProps)(Profile);
