import React from "react";
import { Text, View } from "react-native";
import AppLayout from "./src/AppLayout";
import {
  NavigationContainer,
  TabActionHelpers,
} from "@react-navigation/native";
import { QueryClientProvider, QueryClient } from "react-query";
import AppNavigator from "./src/components/AppNavigator";
import FeedScreen from "./src/screens/FeedScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./src/screens/LoginScreen";

const App = () => {
  const tab = createBottomTabNavigator();
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <AppNavigator />
    </QueryClientProvider>
  );
};

export default App;
