import {
  Text,
  View,
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import styles from "../styles";
import { connect } from "react-redux";
import { dbase } from "../config/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

// import orderBy from "lodash/orderBy";

class Activity extends Component {
  state = {
    activity: [],
  };
  componentDidMount = () => {
    this.getActivity();
  };

  getActivity = async () => {
    const username = this.props.uid;
    const activity = [];
    const q = query(
      collection(dbase, "activity"),
      where("likerId", "==", username)
    );

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      activity.push(doc.data());
    });
    console.log("hello activity");
    console.log(activity);
    this.setState({ activity: activity });
  };

  render() {
    if (this.state.activity.length <= 0)
      return <ActivityIndicator style={styles.container} />;

    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView>
          <FlatList
            data={this.state.activity}
            keyExtractor={(item) => JSON.stringify(item.date)}
            renderItem={({ item }) => (
              <View style={[styles.row, styles.center]}>
                <Image
                  style={styles.roundImage}
                  source={{ uri: item.likerPhoto }}
                />
                <View>
                  <Text>{item.likerName}</Text>
                  <Text>Liked Your Photo</Text>
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
                </View>
                <Image
                  style={styles.roundImage}
                  source={{ uri: item.postPhoto }}
                />
              </View>
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = (reducers) => {
  return {
    uid: reducers.user.uid,
  };
};

export default connect(mapStateToProps)(Activity);
