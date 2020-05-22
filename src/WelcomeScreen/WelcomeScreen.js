import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import LinearGradient from "react-native-linear-gradient"
import logo from "../assets/apptimialogo.png"

export default class WelcomeScreen extends Component {
  render() {
    return (
      <LinearGradient colors={['#FF7400', '#FCA55C']} style={styles.linearGradient}>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={logo}
            style={{ marginTop: 10 }}
          />
          <View style={{ justifyContent: "center", flex: 1 }}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Devices')}>
                <Text style={{ fontSize: 40, color: "white", margin: 5 }}>Rozpocznij trening</Text>
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
})

// import React, { useState, useRef } from 'react';
// import { Text, View, StyleSheet, Button, StatusBar } from 'react-native';
// import { Transitioning, Transition } from 'react-native-reanimated';

// function Sequence() {
//   const transition = (
//     <Transition.Sequence>
//       <Transition.Out type="scale" />
//       <Transition.Change interpolation="easeInOut" />
//       <Transition.In type="fade" />
//     </Transition.Sequence>
//   );

//   let [showText, setShowText] = useState(true);
//   const ref = useRef();

//   return (
//     <Transitioning.View
//       ref={ref}
//       transition={transition}
//       style={styles.centerAll}>
//       <Button
//         title="show or hide"
//         color="#FF5252"
//         onPress={() => {
//           ref.current.animateNextTransition();
//           setShowText(!showText);
//         }}
//       />
//       {showText && (
//         <Text style={styles.text}>Tap the above button to hide me</Text>
//       )}
//     </Transitioning.View>
//   );
// }

// const styles = StyleSheet.create({
//   centerAll: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   text: {
//     fontSize: 16,
//     margin: 10,
//   },
// });

// export default Sequence;
