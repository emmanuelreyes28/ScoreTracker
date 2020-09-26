import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
} from "react-native";

import { Picker } from "@react-native-community/picker";

export default function App() {
  const [numOfPlayers, setPlayers] = useState("0");
  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={styles.title}>Scrabble Score Tracker</Text>
      </SafeAreaView>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.text}>
        <Text style={styles.text}>How many players?</Text>
        <TextInput
          style={styles.input}
          textAlign="center"
          placeholderTextColor="white"
          placeholder="Enter a whole number greater than 0"
          onChangeText={(val) => setPlayers(val)}
        />
        <Text style={styles.players}>
          There are {numOfPlayers} players playing!
        </Text>
      </SafeAreaView>
      <Button color="black" title="Submit" />
      <Image
        source={require("./assets/scrabbleLetters.jpg")}
        style={{ height: "50%", width: 400, top: 25, borderRadius: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#c93006",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  title: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 25,
    paddingTop: 50,
  },
  text: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    height: "25%",
  },
  input: {
    color: "#fff",
    borderWidth: 1,
    borderColor: "black",
    padding: 8,
    width: 300,
  },
  players: {
    color: "#fff",
    fontFamily: "Helvetica",
    fontSize: 20,
    justifyContent: "center",
    alignItems: "center",
    top: 25,
  },
});
