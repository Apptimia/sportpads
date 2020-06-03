import React from 'react'
import { View } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const ThreeCirclesTraining = (props) => {
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

export const TriangleTraining = (props) => {
  return (
    <View style={{justifyContent: "center", alignItems: "center"}}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
      <View style={{ flexDirection: "row" }}>
        <View style={{ transform: [{ rotate: '-30deg' }], marginRight: 15 }}>
          <FontAwesome
            name={props.name4}
            size={props.size}
            color={props.color}
          />
          <FontAwesome
            name={props.name5}
            size={props.size}
            color={props.color}
          />
        </View>
        <View style={{ transform: [{ rotate: '30deg' }], marginLeft: 15 }}>
          <FontAwesome
            name={props.name4}
            size={props.size}
            color={props.color}
          />
          <FontAwesome
            name={props.name5}
            size={props.size}
            color={props.color}
          />
        </View>
      </View>
      <FontAwesome
        name={props.name1}
        size={props.size}
        color={props.color}
      />
    </View>
  )

}
