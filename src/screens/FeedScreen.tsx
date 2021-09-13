import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  FlatList,
} from "react-native";
import { useQuery } from "react-query";

import fetchAsync from "../../lib/fetchAsync";

import AppCard from "../components/AppCard";

const FeedScreen = ({ navigation }) => {
  const { status, error, data } = useQuery("StarShipCart", () =>
    fetchAsync("https://api.fbi.gov/wanted/v1/list")
  );
  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        {data && (
          <FlatList
            data={data.items}
            keyExtractor={(item) => item.title}
            renderItem={({ item }) => (
              <AppCard
                onPress={() => navigation.navigate("Details", item)}
                item={item}
              />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    paddingHorizontal: 20,
    marginTop: 20,
  },
  item: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

export default FeedScreen;
