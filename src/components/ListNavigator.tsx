import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import TermsScreen from "../screens/TermsScreen";
import LoginScreen from "../screens/LoginScreen";
import FeedScreen from "../screens/FeedScreen";
import DetailsScreen from "../screens/DetailsScreen";

const ListNavigator = () => {
  const Tab = createStackNavigator();
  return (
    <Tab.Navigator mode="card">
      <Tab.Screen name="Feed" component={FeedScreen} />
      <Tab.Screen name="Details" component={DetailsScreen} />
    </Tab.Navigator>
  );
};

export default ListNavigator;
