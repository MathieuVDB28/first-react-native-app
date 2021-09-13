import React, { ReactNode } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Colors, Headline } from "react-native-paper";
import { NetworkProvider } from "react-native-offline";

import Offline from "./components/Offline";

// Add a `NetworkProvider
// import { NetworkProvider } from 'react-native-offline';

const AppLayout = () => {
  return (
    <NetworkProvider>
      <Offline />
    </NetworkProvider>
  );
};

export default AppLayout;
