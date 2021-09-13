import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import DetailsScreen from "../screens/DetailsScreen";

function AppCard({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Card style={styles.container}>
        <Card.Title title={item.title} subtitle={item.model} />
        <Card.Content>
          <Paragraph>{item.description}</Paragraph>
          <Paragraph>{item.publication}</Paragraph>
          <Paragraph>{item.cost_in_credits}</Paragraph>
        </Card.Content>
        <Card.Cover source={{ uri: item.images[0].original }} />
      </Card>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    backgroundColor: "#FDFAF6",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default AppCard;
