import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
import { connect } from 'react-redux'
import { darkModeToggle } from '../src/redux/actions'

function DarkMode({darkModeToggle}) {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () =>
    setIsEnabled(previousState => !previousState)
  darkModeToggle()

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

const mapDispatchToProps = dispatch => {
  return {
    darkModeToggle: () => dispatch(darkModeToggle())
  }
}

export default connect(null, mapDispatchToProps)(DarkMode)

