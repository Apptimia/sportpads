import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Section from '../../components/section'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { requestLocationPermission } from '../util/permissions'
import { BleManager } from 'react-native-ble-plx'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'

// function DevicesTitle() {
//   const bluetoothArray = [1, 2, 3, 4]
//   const randomNumber = Math.floor(Math.random() * (bluetoothArray.length+1))
//   return (
//     <View style={{ justifyContent: "center", alignContent: "center" }}>
//       <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 20, textAlign: "center" }}>Devices: {randomNumber}</Text>
//     </View>
//   )
// }

let horizontalWindowHeight = Dimensions.get("window").height
let horizontalWindowWidth = Dimensions.get("window").width
let portraitWindowWidth = Dimensions.get("window").width
let portraitWindowHeight = Dimensions.get("window").height

class BluetoothDevices extends Component {

  state = {
    // randomNumber: Math.floor(Math.random() * 4)
    randomNumber: 3,
    device: "",
    viewMode: Dimensions.get("window").height > Dimensions.get("window").width ? "portrait" : "landscape"
  }

  DevicesTitle() {
    const bluetoothArray = [1, 2, 3, 4]
    const randomNumber = Math.floor(Math.random() * (bluetoothArray.length + 1))
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
      headerTitle: `Urządzenia: ${this.state.randomNumber}`,
      headerStyle: {
        backgroundColor: "#FF7400"
      },
      headerTintColor: '#fff'
    }),
      Dimensions.addEventListener("change", this._updateStyles);

    lor(this);
  }

  _updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > dims.window.width ? "portrait" : "landscape"
    })
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this._updateStyles);
    rol();
  }

  _scanForDevices = async () => {
    // const permission = requestLocationPermission()
    // if (permission) {
    const device = {
      id: "E7:BC:B2:C3:2D:BE"
    }
    this.manager = new BleManager
    const connectedDevice = await this.manager.connectToDevice(device.id)
    const services = await connectedDevice.discoverAllServicesAndCharacteristics()
    const characteristic = await services.services()
    console.log("chars:", characteristic)

    // this.manager = new BleManager
    // this.manager.startDeviceScan(["25810001-722E-7FB7-EA11-3749442F5886"], null, (e, d) => {
    //   console.log(e, d)
    //   if (d) {
    //     console.log("went in 2")
    //     this.manager.stopDeviceScan()
    //     this.manager.connectToDevice(d.id).then(() => {
    //       const device = d.id
    //       device.discoverAllServicesAndCharacteristics().then((r) => {
    //         console.log("WENT TO DSICOVER", r)
    //       })
    //     }).catch((e) => console.log("error", e))
    //   }
    // })
    // this.setState({ device: "ok" })
    // }
  }

  _connectToDevice = () => {
    this.manager.connectToDevice(`${this.state.device}`)
  }

  render() {

    const styles = StyleSheet.create({
      content: {
        flexDirection: "row"
      },
      sectionSizeTwoPortrait: {
        height: hp('100%'),
        width: wp('100%')
      },
      sectionSizeTwoHorizontal: {
        height: hp('81%'),
        width: wp('100%')
      },
      twoDevicesHorDirection: {
        flexDirection: "row"
      },
      twoDevicesPorDirection: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      },
      sectionSizeThreePortrait: {
        height: hp('45%'),
        width: wp('100%'),
      },
      sectionSizeThreeHorizontal: {
        height: hp('100%'),
        width: wp('50%')
      }
    })

    return (
      <View>
        {this.state.randomNumber <= 2 && (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Timer', { number: 2 })}>
            <Section style={this.state.viewMode === "portrait" ? styles.sectionSizeTwoPortrait : styles.sectionSizeTwoHorizontal}>
              <View style={this.state.viewMode === "portrait" ? styles.twoDevicesPorDirection : styles.twoDevicesHorDirection}>
                <FontAwesome
                  name="dot-circle-o"
                  size={100}
                  color="#FF7400"
                />
                <FontAwesome
                  name={this.state.viewMode === "portrait" ? "long-arrow-up" : "long-arrow-left"}
                  size={100}
                  color="#FF7400"
                />
                <FontAwesome
                  name={this.state.viewMode === "portrait" ? "long-arrow-down" : "long-arrow-right"}
                  size={100}
                  color="#FF7400"
                />
                <FontAwesome
                  name="dot-circle-o"
                  size={100}
                  color="#FF7400"
                />
              </View>
            </Section>
          </TouchableOpacity>
        )}
        {this.state.randomNumber === 3 && (
          //<View style={this.state.viewMode === "portrait" ? styles.portraitWrapper : styles.horizontalWrapper}>
          <View style={styles.content}>
            <TouchableOpacity
              // style={this.state.viewMode === "portrait" ? styles.threeDevicesPortWrapper : styles.threeDevicesHorWrapper}
              onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
            // onPress={() => this._scanForDevices()}
            >
              <Section style={this.state.viwMode === "portrait" ? styles.sectionSizeThreePortrait : styles.sectionSizeThreeHorizontal}>
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
              </Section>
            </TouchableOpacity>
            <TouchableOpacity
              // style={this.state.viewMode === "portrait" ? styles.threeDevicesPortWrapper : styles.threeDevicesHorWrapper}
              onPress={() => this.props.navigation.navigate('Timer', { number: 32 })}
            //onPress={() => this._connectToDevice()}
            >
              <Section style={this.state.viwMode === "portrait" ? styles.sectionSizeThreePortrait : styles.sectionSizeThreeHorizontal}>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
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
                  <View style={{ transform: [{ rotate: '-30deg' }], marginRight: 15 }}>
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
                  <View style={{ transform: [{ rotate: '30deg' }], marginLeft: 15 }}>
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
              </Section>
            </TouchableOpacity>
          </View>
        )}
        {this.state.randomNumber === 4 && (
          <View style={this.state.viewMode === "portrait" ? styles.portraitWrapper : styles.horizontalWrapper}>
            <TouchableOpacity
              style={this.state.viewMode === "portrait" ? [styles.fourDevicesPortWrapper, { width: "33%", height: "100%" }] : [styles.fourDevicesHorWrapper, { width: horizontalWindowWidth / 3, height: horizontalWindowHeight * 0.81 }]}
              // onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
              onPress={() => this._scanForDevices()}
            >
              {/* <Section style={styles.sectionSizeTwo}> */}
              <View style={{ flexDirection: "row" }}>
                <FontAwesome
                  name="dot-circle-o"
                  size={30}
                  color="#FF7400"
                  style={{ marginRight: 30 }}
                />
                <FontAwesome
                  name="dot-circle-o"
                  size={30}
                  color="#FF7400"
                  style={{ marginRight: 30 }}
                />
                <FontAwesome
                  name="dot-circle-o"
                  size={30}
                  color="#FF7400"
                />
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ transform: [{ rotate: '-35deg' }], marginRight: 15 }}>
                  <FontAwesome
                    name="long-arrow-up"
                    size={33}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-down"
                    size={33}
                    color="#FF7400"
                  />
                </View>
                <View>
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
                <View style={{ transform: [{ rotate: '35deg' }], marginLeft: 15 }}>
                  <FontAwesome
                    name="long-arrow-up"
                    size={33}
                    color="#FF7400"
                  />
                  <FontAwesome
                    name="long-arrow-down"
                    size={33}
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
            <TouchableOpacity
              style={this.state.viewMode === "portrait" ? [{ width: "33%", height: "100%" }, styles.fourDevicesPortWrapper] : [{ width: horizontalWindowWidth / 3, height: horizontalWindowHeight * 0.81 }, styles.fourDevicesHorWrapper]}
              // onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
              onPress={() => this._scanForDevices()}
            >
              <View style={{ flexDirection: "row" }}>
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
              {/* <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View>
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
                  </View> */}
              {/* <View style={{ transform: [{ rotate: '50deg'}], marginLeft: windowWidth * 0.06 }}>
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
                  <View style={{ transform: [{ rotate: '-50deg'}], marginRight: windowWidth * 0.06 }}>
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
                  </View> */}
              {/* <View>
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
                  </View> */}
              <View>
                <FontAwesome
                  name="arrows-alt"
                  size={40}
                  color="#FF7400"
                />
              </View>
              <View style={{ flexDirection: "row" }}>
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
            </TouchableOpacity>
            <TouchableOpacity
              style={this.state.viewMode === "portrait" ? [styles.fourDevicesPortWrapper, { width: "33%", height: "100%" }] : [styles.fourDevicesHorWrapper, { width: horizontalWindowWidth / 3, height: horizontalWindowHeight * 0.81 }]}
              // onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
              onPress={() => this._scanForDevices()}
            >
              {/* <Section style={styles.sectionSizeTwo}> */}
              {/* <View style={{ width: "40%", justifyContent: "center" }}> */}
              <View style={{ flexDirection: "row" }}>
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
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <View style={{ marginRight: portraitWindowWidth * 0.1 }}>
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
                <View>
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
              <View style={{ flexDirection: "row" }}>
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
              {/* </View> */}
              {/* </Section> */}
            </TouchableOpacity>
          </View>
        )}
      </View>
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
    width: horizontalWindowWidth / 2,
    height: horizontalWindowHeight * 0.81,
    borderColor: "#FF7400",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  fourDevicesPortWrapper: {
    // height: "33%",
    // width: "100%",
    borderColor: "#FF7400",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  fourDevicesHorWrapper: {
    // width: horizontalWindowWidth / 3,
    // height: horizontalWindowHeight * 0.81,
    borderColor: "#FF7400",
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center"
  }

})

export default BluetoothDevices
