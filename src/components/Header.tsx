import { View, StyleSheet } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const Header = (props: any) => {
  return (
    <View>
    <View style={styles.layout}>
        <Text style={styles.text}>Welcome To</Text>
        <Text style={styles.text}>STARPORT</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
  text: {
    color: "#f5f6fa",
    fontSize: 28
},
  layout: {
    width: '100%',
    height: 200,
    backgroundColor: "#592EDB",
    justifyContent: 'center',
    alignItems: "center",
    marginTop: 20
}
});

export default Header;