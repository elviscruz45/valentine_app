import React from "react";
import { Text, View, Button } from "react-native";
import styles from "../styles";

export default class Home extends React.Component {
  state = {
    count: 10,
  };
  add = () => {
    console.log("adding");
    let num = this.state.count + 1;
    this.setState({ count: num });
    console.log(this.state.count);
  };
  subtract = () => {
    console.log("subtract");
    let num = this.state.count - 1;
    this.setState({ count: num });
    console.log(this.state.count);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text> Home</Text>
        <Text>
          --Valentine ias in process of creation &&, forecast date june 30,2024{" "}
          {"  "}
          {this.state.count}
        </Text>
        <Button title="Add" onPress={() => this.add()} />
        <Button title="Subtract" onPress={() => this.subtract()} />
      </View>
    );
  }
}
