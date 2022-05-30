import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";

const Countries = ({ country }) => {
  return (
    <View style={styles.cardContainer}>
      <Text>{country.name.common}</Text>
      <Image
        source={{ uri: country.flags.png }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 100,
          display: "flex",
        }}
      />
    </View>
  );
};

export default Countries;

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 15,
  },
});
