import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import { Text, View, Image, FlatList } from "react-native";

const Stack = createStackNavigator();

export function HomeScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}
