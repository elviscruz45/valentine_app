import React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Upload from "../screens/Upload";
import Activity from "../screens/Activity";
import Profile from "../screens/Profile";
import { Image } from "react-native";

const imgHome = require("../assets/Home.png");
const imgHomeFilled = require("../assets/HomeFilled.png");
const imgsearch = require("../assets/search.png");
const imgsearchFilled = require("../assets/searchFilled.png");
const imgteam = require("../assets/team.png");
const imgteamFilled = require("../assets/teamFilled.png");
const imgfactory = require("../assets/factory.png");
const imgfactoryFilled = require("../assets/factoryFilled.png");

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouterName="Home"
      tabBarOptions={{
        style: {
          backgroundColor: "black",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => renderHome(focused),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => renderSearch(focused),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={Upload}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => renderUpload(focused),
        }}
      />
      <Tab.Screen
        name="Activity"
        component={Activity}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => renderActivity(focused),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => renderProfile(focused),
        }}
      />
    </Tab.Navigator>
  );
}

function renderHome(focused) {
  return (
    <Image
      source={focused ? imgHomeFilled : imgHome}
      style={{ width: 30, height: 30, top: 15 }}
    />
  );
}

function renderSearch(focused) {
  return (
    <Image
      source={focused ? imgsearchFilled : imgsearch}
      style={{ width: 30, height: 30, top: 15 }}
    />
  );
}

function renderUpload() {
  return (
    <Image
      source={require("../assets/add.png")}
      style={{ width: 50, height: 50, top: 15 }}
    />
  );
}

function renderActivity(focused) {
  return (
    <Image
      source={focused ? imgteamFilled : imgteam}
      style={{ width: 30, height: 30, top: 15 }}
    />
  );
}

function renderProfile(focused) {
  return (
    <Image
      source={focused ? imgfactoryFilled : imgfactory}
      style={{ width: 30, height: 30, top: 15 }}
    />
  );
}
