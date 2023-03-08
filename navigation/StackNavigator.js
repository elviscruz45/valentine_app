import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Camera from "../screens/Camera";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import Post_Camera from "../screens/Post_Camera";

const Stack = createStackNavigator();

export function HomeScreen(props) {
  function handleCameraPress() {
    props.navigation.navigate("Camera");
    console.log("hahahh");
    // navigation.navigate("Camera");
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerTransparent: false,
          headerTitle: () => (
            <View style={{ flexDirection: "row" }}>
              <Image
                source={require("../assets/smcv2.png")}
                style={{ width: 30, height: 30 }}
              />
              <Image
                source={require("../assets/valentine.png")}
                style={{ width: 120, height: 30 }}
              />
            </View>
          ),

          headerLeft: () => (
            <Image
              source={require("../assets/Elvis_Cruz_Formal.jpg")}
              style={styles.roundImage}
            />
          ),
          // title: "",
          headerRight: () => (
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity onPress={() => handleCameraPress()}>
                <Ionicons
                  style={{ margin: 5 }}
                  name="md-camera"
                  size={30}
                  color="black"
                />
              </TouchableOpacity>

              <Ionicons
                style={{ margin: 5 }}
                name="notifications"
                size={30}
                color="black"
              />
              <MaterialIcons
                style={{ margin: 5 }}
                name="favorite"
                size={30}
                color="black"
              />
            </View>
          ),
        }}
      />

      <Stack.Screen
        name="Camera"
        component={Camera}
        options={{
          title: "",
          // headerShown: false,
          headerTransparent: true,
          headerBackTitle: "Home",
          headerTintColor: "white",
        }}
      />
      <Stack.Screen
        name="Post_Camera"
        component={Post_Camera}
        options={{
          title: "",
          // headerShown: false,
          headerTransparent: true,
          headerBackTitle: "Photo",
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
}
