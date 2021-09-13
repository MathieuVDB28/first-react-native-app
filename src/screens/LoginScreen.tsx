import React from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import Constants from "expo-constants";
import { Button } from "react-native-paper";

import Header from "../components/Header";

function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>FBI</Text>
      <Image
        style={styles.logo}
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Seal_of_the_FBI.svg/1024px-Seal_of_the_FBI.svg.png",
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    marginTop: 20,
  },
  titre: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 30,
  },
});
export default LoginScreen;
