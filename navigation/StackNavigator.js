import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Camera from "../screens/Camera";
import { Image, View, TouchableOpacity, Text } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
            <View>
              <Text style={{ fontWeight: "bold", fontFamily: "Arial" }}>
                Elvis Ronald Cruz Chullo
              </Text>
              <Text style={{ fontWeight: "bold", fontFamily: "Arial" }}>
                Software Developer
              </Text>
            </View>
          ),
          headerTitleContainerStyle: {
            marginLeft: -100,
          },

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
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
