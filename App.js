/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  return (
    <View style={styles.wrapper}>
      <Text>Announce your speech</Text>

      <View style={styles.row}>
        <Text>Enter Text</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View style={styles.row}>
        <Text>Select Voice</Text>
        <View style={styles.outer}>
          <Picker style={styles.select} />
        </View>
      </View>

      <Button title="Convert To Speech" onPress={() => {}} />
      <Button title="Send to Admin Hub" onPress={() => {}} />
    </View>
  );
}
