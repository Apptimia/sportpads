import React from 'react'
import { View } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import DarkMode from './DarkMode'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'

class Drawer extends React.Component {

  render() {
    const { darkMode } = this.props

    return (
      <DrawerContentScrollView style={{ backgroundColor: !darkMode ? "#83807D" : "white" }}>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: 10 }}>
          <Entypo
            name={"moon"}
            size={20}
            color={darkMode ? "black" : "white"}
          />
          <DrawerItem
            label="Tryb Ciemny"
            labelStyle={{color: darkMode ? "black" : "white"}}
          />
          <DarkMode />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: 10 }}>
          <FontAwesome
            name="history"
            size={20}
            color={darkMode ? "black" : "white"}
          />
          <DrawerItem
            label="Historia treningów"
            labelStyle={{color: darkMode ? "black" : "white"}}
          />
        </View>
      </DrawerContentScrollView>
    )
  }

}

const mapStateToProps = state => {
  return {
    darkMode: state.ui.darkMode
  }
}

export default connect(mapStateToProps, null)(Drawer)
