import React from 'react'
import { View, Text } from 'react-native'
import {
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import DarkMode from './DarkMode'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

export default Drawer = (props) => {
  return (
    <DrawerContentScrollView>
      <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: 10 }}>
        <Entypo
          name={"moon"}
          size={20}
        />
        <DrawerItem
          label="Tryb Ciemny"
        />
        <DarkMode />
      </View>
      <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginLeft: 10 }}>
        <FontAwesome
          name="history"
          size={20}
        />
        <DrawerItem
          label="Historia treningów"
        />
      </View>
    </DrawerContentScrollView>
  )
}

