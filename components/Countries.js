import React from "react";
import { Text, View } from "react-native";

const Countries = ({ country }) => {
  return (
    <View>
      <Text>{country.name.common}</Text>
    </View>
  );
};

export default Countries;
