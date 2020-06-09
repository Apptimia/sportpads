import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";

export default function DarkMode() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => 
  setIsEnabled(previousState => !previousState)
  darkMode = !darkMode
  console.log(darkMode)

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#fff" }}
        thumbColor={"#FF7400"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
