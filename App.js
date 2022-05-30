import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCountries(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to CF Country Hunter</Text>
      <StatusBar style="auto" />
      <Image
        source={{
          uri: "https://yt3.ggpht.com/ytc/AKedOLQv2rLgjj2loLBpLSn5DGdGt2LLd75AwSJuZ040Lw=s900-c-k-c0x00ffffff-no-rj",
        }}
        style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 10 }}
      />

      <Button
        onPress={() => Alert.alert("Hello")}
        title="Visit Our Website"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />

      {/* _____________ */}
      <ScrollView style={{ marginTop: 50 }}>
        {countries?.map((country) => (
          <Countries key={country.id} country={country}></Countries>
        ))}
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
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
  heading: {
    marginBottom: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
    backgroundColor: "black",
  },
});
