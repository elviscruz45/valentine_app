import { Text, View } from "react-native";
import React, { Component } from "react";
import styles from "../styles";

export default class Camera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Camera</Text>
      </View>
    );
  }
}
