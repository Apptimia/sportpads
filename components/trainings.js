import React from 'react'
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const ThreeCircles = (props) => {
  return (
    <View style={{ justifyContent: "center", alignItems: "center" }}>
      <FontAwesome
        name={props.name1}
        size={props.size}
        color={props.color}
      />
      <FontAwesome
        name={props.name2}
        size={props.size}
        color={props.color}
      />
      <FontAwesome
        name={props.name3}
        size={props.size}
        color={props.color}
      />
      <FontAwesome
        name={props.name1}
        size={props.size}
        color={props.color}
      />
      <FontAwesome
        name={props.name2}
        size={props.size}
        color={props.color}
      />
      <FontAwesome
        name={props.name3}
        size={props.size}
        color={props.color}
      />
      <FontAwesome
        name={props.name1}
        size={props.size}
        color={props.color}
      />
    </View>
  )
}
