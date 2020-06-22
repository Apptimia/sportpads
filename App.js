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
  View,
  Text,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createDrawerNavigator } from '@react-navigation/drawer'
import BluetoothDevices from './src/BluetoothDevices/BluetoothDevices'
import TimerScreen from './src/Timer/Timer'
import WelcomeScreen from './src/WelcomeScreen/WelcomeScreen'
import DrawerComponent from './components/DrawerComponent'
import TrainingsHistory from './src/TrainingsHistory/TrainingsHistory'
import { Provider } from 'react-redux'
import configureStore from './src/redux/configureStore'

const store = configureStore()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

function Root() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{
          headerTitle: "SportPads",
          headerStyle: {
            backgroundColor: "#FF7400"
          },
          headerTitleStyle: {
            alignSelf: "center"
          },
          headerTintColor: '#fff'
        }}
      />
      <Stack.Screen
        name="Devices"
        component={BluetoothDevices}
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
      <Stack.Screen
        name="Trainings"
        component={TrainingsHistory}
      />
    </Stack.Navigator>
  )
}

const MainStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#FF7400'
        }}
        drawerContent={(props) => <DrawerComponent {...props} />}
      >
        <Drawer.Screen name="Root" component={Root} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  )
}
