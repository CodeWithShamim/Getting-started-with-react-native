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
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import Countries from "./components/Countries";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCountries(data);
      });
  }, []);

  const onChangeText = (text) => {
    setLoading(true);
    const filtered = countries.filter((country) =>
      country.name.common.includes(text)
    );
    setSearched(filtered);
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome to DGdddd</Text>
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

      {/* search field  */}
      {!loading && (
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          placeholder="Seach country"
        />
      )}
      {/* _____________ */}
      <ScrollView style={{ marginTop: 50 }}>
        {searched?.map((country, index) => (
          <Countries key={index} country={country}></Countries>
        ))}
        {loading && <ActivityIndicator size="large" color="#00ff00" />}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F6FB",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    textAlign: "center",
    width: 1000,
    marginBottom: 10,
    marginTop: 40,
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    padding: 20,
    backgroundColor: "black",
  },
  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
