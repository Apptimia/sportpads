/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import 'react-native-gesture-handler'
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/FontAwesome'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Stopwatch } from 'react-native-stopwatch-timer'
import BluetoothDevices from './src/BluetoothDevices/BluetoothDevices'
import TimerScreen from './src/Timer/Timer'

const Stack = createStackNavigator()

const SportPadsStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BluetoothDevices}
          options={{
            title: 'Devices',
            headerStyle: {
              backgroundColor: '#FF7400'
            },
          }}
        />
        <Stack.Screen
          name="Timer"
          component={Timer}
        />
      </Stack.Navigator>
  )
}

function DevicesTitle() {
  const bluetoothArray = [1, 2, 3, 4]
  const randomNumber = Math.floor(Math.random() * (bluetoothArray.length+1))
  return (
    <View style={{ justifyContent: "center", alignContent: "center" }}>
      <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Devices: {randomNumber}</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Devices"
          component={BluetoothDevices}
          // options={({ route }) => ({ title: route.name })}
          //   title: 'Devices',
          //   headerStyle: {
          //     backgroundColor: '#FF7400'
          //   },
          //   headerTintColor: '#fff'
          // }}
        />
        <Stack.Screen
          name="Timer"
          component={TimerScreen}
          options={{ 
            headerTitle: "Trening",
            headerStyle: {
              backgroundColor: "#FF7400"
            },
            headerTintColor: '#fff'
            }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// class App extends Component {

//   state = {
//     blueToothDevices: 0,
//     timerStart: false,
//     stopwatchStart: false,
//     totalDuration: 90000,
//     timerReset: false,
//     stopwatchReset: false,
//   }

//   render() {

//     const getRandomNumber = () => {
//       const bluetoothArray = [1, 2, 3, 4]
  
//       const randomNumber = Math.floor(Math.random() * (bluetoothArray.length+1))
//       this.setState({ blueToothDevices: randomNumber })
//     }

//     const toggleTimer = () => {
//       this.setState({timerStart: !this.state.timerStart, timerReset: false})
//     }

//     const resetTimer = () => {
//       this.setState({timerStart: false, timerReset: true});
//     }
  
//     const toggleStopwatch = () => {
//       this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
//     }
  
//     const resetStopwatch = () => {
//       this.setState({stopwatchStart: false, stopwatchReset: true});
//     }
    
//     const getFormattedTime = (time) => {
//         this.currentTime = time;
//     };

//     return (
//       // <View>
//       //   <Text>
//       //     SportPads
//       //   </Text>
//       //   <Text>
//       //     {this.state.blueToothDevices}
//       //   </Text>
//       //   <TouchableOpacity onPress={getRandomNumber}>
//       //     <Text>Random</Text>
//       //   </TouchableOpacity>
//       //   <Stopwatch laps msecs start={this.state.stopwatchStart}
//       //     reset={this.state.stopwatchReset}
//       //     options={options}
//       //     getTime={this.getFormattedTime} />
//       // </View>
      // <View>
      //   <Stopwatch laps msecs start={this.state.stopwatchStart}
      //     reset={this.state.stopwatchReset}
      //     options={options}
      //     getTime={getFormattedTime} 
      //   />
      //   <TouchableOpacity onPress={toggleStopwatch}>
      //     <Icon 
      //           name={!this.state.stopwatchStart ? "play-circle" : "pause-circle"}
      //           size={60}
      //           color="black"
      //       />
      //   </TouchableOpacity>
      //   <TouchableHighlight onPress={resetStopwatch}>
      //     <Text style={{fontSize: 30}}>Reset</Text>
      //   </TouchableHighlight>
      // </View>
//     );
//   }
// };

// const handleTimerComplete = () => alert("custom completion function");

// const options = {
//   container: {
//     backgroundColor: '#fff',
//     padding: 5,
//     borderRadius: 5,
//     width: 220,
//   },
//   text: {
//     fontSize: 30,
//     color: 'black',
//     marginLeft: 7,
//   }
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
