import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import { TriangleTraining } from '../../components/trainings'
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
            <TriangleTraining
                  name1="dot-circle-o"
                  name2="long-arrow-left"
                  name3="long-arrow-right"
                  name4="long-arrow-up"
                  name5="long-arrow-down"
                  size={25}
                  color="white"
                />
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
