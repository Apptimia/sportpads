import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Section from '../../components/section'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { requestLocationPermission } from '../util/permissions'
import { BleManager } from 'react-native-ble-plx'

// function DevicesTitle() {
//   const bluetoothArray = [1, 2, 3, 4]
//   const randomNumber = Math.floor(Math.random() * (bluetoothArray.length+1))
//   return (
//     <View style={{ justifyContent: "center", alignContent: "center" }}>
//       <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Devices: {randomNumber}</Text>
//     </View>
//   )
// }

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

class BluetoothDevices extends Component {

  state = {
    // randomNumber: Math.floor(Math.random() * 4)
    randomNumber: 3,
    device: "",
    viewMode: Dimensions.get("window").height > Dimensions.get("window").width ? "portrait" : "landscape",
  }

  DevicesTitle() {
    const bluetoothArray = [1, 2, 3, 4]
    const randomNumber = Math.floor(Math.random() * (bluetoothArray.length+1))
    this.setState({ randomNumber: randomNumber })
    console.log(this.state.randomNumber)
    return (
      <View style={{ justifyContent: "center", alignContent: "center" }}>
      <TouchableOpacity onPress={() => console.log("test")}>
        <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Devices: {randomNumber}</Text>
      </TouchableOpacity>
      </View>
    )
  }

    componentDidMount() {
      // this.DevicesTitle()
      this.props.navigation.setOptions({
        headerTitle: `Devices: ${this.state.randomNumber}`,
        headerStyle: {
          backgroundColor: "#FF7400"
        },
        headerTintColor: '#fff'
      }),
      Dimensions.addEventListener("change", this._updateStyles);
    }

    _updateStyles = dims => {
      this.setState({
        viewMode: dims.window.height > dims.window.width ? "portrait" : "landscape"
      })
    }

    componentWillUnmount() {
      Dimensions.removeEventListener("change", this._updateStyles);
    }

    _scanForDevices = () => {
      // const permission = requestLocationPermission()
      // if (permission) {
        console.log("went in")
        this.manager = new BleManager
        this.manager.startDeviceScan(["25810001-722E-7FB7-EA11-3749442F5886"], null, (e, d) => {
          console.log(e, d)
          if (d) {
            console.log("went in 2")
            this.manager.stopDeviceScan()
            this.manager.connectToDevice(d.id).then(() => {
              console.log("WTF?", d)
            }).catch((e) => console.log("error", e))
          }
        })
        // this.setState({ device: "ok" })
      // }
    }

    _connectToDevice = () => {
      this.manager.connectToDevice(`${this.state.device}`)
    }

    render() {

        return (
            // <View style={styles.background}>
            // <View>
            // <Fade style={{ justifyContent: 'center', alignItems: 'center' }}>
            //   <View>
            //     <Text style={{ fontSize: 20 }}>Test</Text>
            //   </View>
            // </Fade>
            // <View style={this.state.viewMode === "portrait" ? styles.portraitWrapper : styles.horizontalWrapper}>
            <View>
            {this.state.randomNumber <= 2 && (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Timer', { number: 2 })}>
              <Section style={styles.sectionSizeOne}>
                <FontAwesome
                  name="dot-circle-o"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color="#FF7400"
                />
                <FontAwesome
                  name="long-arrow-up"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color="#FF7400"
                />
                <FontAwesome
                  name="long-arrow-down"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color="#FF7400"
                />
                <FontAwesome
                  name="dot-circle-o"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color="#FF7400"
                />
              </Section>
            </TouchableOpacity>
            )}
            {this.state.randomNumber === 3 && (
              <View style={this.state.viewMode === "portrait" ? styles.portraitWrapper : styles.horizontalWrapper}>
              <TouchableOpacity 
              style={this.state.viewMode === "portrait" ? styles.threeDevicesPortWrapper : styles.threeDevicesHorWrapper}
              onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
              //onPress={() => this._scanForDevices()}
              >
                {/* <Section style={styles.sectionSizeTwo}> */}
                <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-up"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-down"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-up"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-down"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color="#FF7400"
                  />
                {/* </Section> */}
            </TouchableOpacity>
            <TouchableOpacity 
              style={this.state.viewMode === "portrait" ? styles.threeDevicesPortWrapper : styles.threeDevicesHorWrapper}
              onPress={() => this.props.navigation.navigate('Timer', { number: 32 })}
              //onPress={() => this._connectToDevice()}
            >
                {/* <Section style={styles.sectionSizeTwo}> */}
                <View style={{ flexDirection: "row"}}>
                <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-left"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-right"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color="#FF7400"
                  />
                  </View>
                  <View style={{ flexDirection: "row" }}>
                  <View style={{ transform: [{ rotate: '-30deg'}], marginRight: 15 }}>
                  <FontAwesome
                    name="long-arrow-up"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-down"
                    size={30}
                    color="#FF7400"
                  />
                  </View>
                  <View style={{ transform: [{ rotate: '30deg'}], marginLeft: 15 }}>
                  <FontAwesome
                    name="long-arrow-up"
                    size={30}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-down"
                    size={30}
                    color="#FF7400"
                  />
                  </View>
                  </View>
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color="#FF7400"
                  />
                {/* </Section> */}
            </TouchableOpacity>
            </View>
            )}
            </View>
           
            //   </View>
            // </View>
        )
    }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    color: "red"
  },
  content: {
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center"
  },
  sectionSizeOne: {
    height: "100%",
    width: "100%"
  },
  sectionSizeTwo: {
    height: "50%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  sectionSizeThree: {
    height: "33%",
    width: "100%"
  },
  portraitWrapper: {
    flexDirection: "column"
  },
  horizontalWrapper: {
    flexDirection: "row"
  },
  threeDevicesPortWrapper: {
    height: "50%", 
    borderColor: "#FF7400", 
    borderWidth: 3, 
    alignItems: "center", 
    justifyContent: "center"
  },
  threeDevicesHorWrapper: {
    width: windowWidth / 2,
    height: windowHeight * 0.81,
    borderColor: "#FF7400", 
    borderWidth: 3, 
    alignItems: "center", 
    justifyContent: "center"
  }

})

export default BluetoothDevices
