import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  ScrollView,
} from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import Constants from "expo-constants";
import { Button } from "react-native-paper";
import { useQuery } from "react-query";
import fetchAsync from "../../lib/fetchAsync";

import AppCard from "../components/AppCard";

import Header from "../components/Header";

function DetailsScreen({ route }) {
  const item = route.params;
  const { status, error, data } = useQuery("StarShipCart", () =>
    fetchAsync("https://api.fbi.gov/wanted/v1/list")
  );
  return (
    <ScrollView>
      <Card style={styles.container}>
        <Card.Cover source={{ uri: item.images[0].original }} />
        <Card.Title title={item.title} subtitle={item.model} />
        <Card.Content>
          <Paragraph>{item.description}</Paragraph>
          <Paragraph>{item.publication}</Paragraph>
          <Paragraph>{item.details}</Paragraph>
          <Paragraph>{item.subjects}</Paragraph>
          {item.possible_countries && (
            <Paragraph>Possible country: {item.possible_countries}</Paragraph>
          )}
          {!item.possible_countries && (
            <Paragraph>Possible country: don't know</Paragraph>
          )}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
});
export default DetailsScreen;
