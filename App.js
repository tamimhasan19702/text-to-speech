/** @format */

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import styles from "./styles";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.header}>Announce your speech</Text>

        <View style={styles.form}>
          <View style={styles.row}>
            <Text style={styles.label}>Enter Text</Text>
            <TextInput style={styles.textarea} />
          </View>

          <View style={styles.row}>
            <Text style={styles.label}>Select Voice</Text>
            <View style={styles.outer}>
              <Picker
                style={styles.select}
                selectedValue={selectedValue}
                onValueChange={(itemValue) => setSelectedValue(itemValue)}>
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
                <Picker.Item label="Option 3" value="option3" />
              </Picker>
            </View>
          </View>

          <View>
            <Button
              title="Convert To Speech"
              onPress={() => {}}
              style={styles.button}
            />
            <View style={styles.spacing} />
            <Button
              title="Send to Admin Hub"
              onPress={() => {}}
              style={styles.button}
            />
          </View>
        </View>
      </View>
    </View>
  );
}
