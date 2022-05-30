import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";

export default function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  console.log(countries);

  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://yt3.ggpht.com/ytc/AKedOLQv2rLgjj2loLBpLSn5DGdGt2LLd75AwSJuZ040Lw=s900-c-k-c0x00ffffff-no-rj",
        }}
        style={{ width: 200, height: 200 }}
      />
      <Button
        onPress={() => Alert.alert("Hello")}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      {/* _____________ */}
      <ScrollView>
        {countries?.map((country) => (
          <Countries key={country.id} country={country}></Countries>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
