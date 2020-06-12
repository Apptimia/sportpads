import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import Section from '../../components/section'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { requestLocationPermission } from '../util/permissions'
import { BleManager } from 'react-native-ble-plx'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'
import { ThreeCirclesTraining, TriangleTraining } from '../../components/trainings'
import { connect } from 'react-redux'
import { orange, darkModeGrey } from '../util/constants'

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
        backgroundColor: orange
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

    const { viewMode } = this.state
    const { darkMode } = this.props

    const styles = StyleSheet.create({
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
        height: hp('81%'),
        width: wp('50%')
      },
      columnDirection: {
        flexDirection: "column"
      },
      rowDirection: {
        flexDirection: "row"
      },
      sectionSizeFourPortrait: {
        height: hp("30%"),
        width: wp("100%")
      },
      sectionSizeFourHorizontal: {
        height: hp("90%"),
        width: wp("34%")
      }
    })

    return (
      <View>
        {this.state.randomNumber <= 2 && (
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Timer', { number: 2 })}>
            <Section style={viewMode === "portrait" ? styles.sectionSizeTwoPortrait : styles.sectionSizeTwoHorizontal}>
              <View style={viewMode === "portrait" ? styles.twoDevicesPorDirection : styles.twoDevicesHorDirection}>
                <FontAwesome
                  name="dot-circle-o"
                  size={100}
                  color={orange}
                />
                <FontAwesome
                  name={this.state.viewMode === "portrait" ? "long-arrow-up" : "long-arrow-left"}
                  size={100}
                  color={orange}
                />
                <FontAwesome
                  name={this.state.viewMode === "portrait" ? "long-arrow-down" : "long-arrow-right"}
                  size={100}
                  color={orange}
                />
                <FontAwesome
                  name="dot-circle-o"
                  size={100}
                  color={orange}
                />
              </View>
            </Section>
          </TouchableOpacity>
        )}
        {this.state.randomNumber === 3 && (
          //<View style={this.state.viewMode === "portrait" ? styles.columnDirection : styles.rowDirection}>
          <View style={viewMode === "portrait" ? styles.columnDirection : styles.rowDirection}>
            <TouchableOpacity
              // style={this.state.viewMode === "portrait" ? styles.threeDevicesPortWrapper : styles.threeDevicesHorWrapper}
              onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
            >
              <Section style={[viewMode === "portrait" ? styles.sectionSizeThreePortrait : styles.sectionSizeThreeHorizontal, { backgroundColor: !darkMode? "#83807D" : "#eee" }]}>
                <ThreeCirclesTraining
                  name1="dot-circle-o"
                  name2="long-arrow-up"
                  name3="long-arrow-down"
                  size={viewMode === "portrait" ? 30 : 40}
                  color={orange}
                />
              </Section>
            </TouchableOpacity>
            <TouchableOpacity
              // style={this.state.viewMode === "portrait" ? styles.threeDevicesPortWrapper : styles.threeDevicesHorWrapper}
              onPress={() => this.props.navigation.navigate('Timer', { number: 32 })}
            //onPress={() => this._connectToDevice()}
            >
              <Section style={[viewMode === "portrait" ? styles.sectionSizeThreePortrait : styles.sectionSizeThreeHorizontal, {backgroundColor: !darkMode? "#83807D" : "#eee"}]}>
                <TriangleTraining
                  name1="dot-circle-o"
                  name2="long-arrow-left"
                  name3="long-arrow-right"
                  name4="long-arrow-up"
                  name5="long-arrow-down"
                  size={viewMode === "portrait" ? 30 : 45}
                  color={orange}
                />
              </Section>
            </TouchableOpacity>
          </View>
        )}
        {this.state.randomNumber === 4 && (
          <View style={viewMode === "portrait" ? styles.columnDirection : styles.rowDirection}>
            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
              onPress={() => this._scanForDevices()}
            >
              <Section style={viewMode === "portrait" ? styles.sectionSizeFourPortrait : styles.sectionSizeFourHorizontal}>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                    style={{ marginRight: 30 }}
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                    style={{ marginRight: 30 }}
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ transform: [{ rotate: '-35deg' }], marginRight: 15 }}>
                    <FontAwesome
                      name="long-arrow-up"
                      size={33}
                      color={orange}
                    />
                    <FontAwesome
                      name="long-arrow-down"
                      size={33}
                      color={orange}
                    />
                  </View>
                  <View>
                    <FontAwesome
                      name="long-arrow-up"
                      size={30}
                      color={orange}
                    />
                    <FontAwesome
                      name="long-arrow-down"
                      size={30}
                      color={orange}
                    />
                  </View>
                  <View style={{ transform: [{ rotate: '35deg' }], marginLeft: 15 }}>
                    <FontAwesome
                      name="long-arrow-up"
                      size={33}
                      color={orange}
                    />
                    <FontAwesome
                      name="long-arrow-down"
                      size={33}
                      color={orange}
                    />
                  </View>
                </View>
                <FontAwesome
                  name="dot-circle-o"
                  size={30}
                  color={orange}
                />
              </Section>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
              onPress={() => this._scanForDevices()}
            >
              <Section style={viewMode === "portrait" ? styles.sectionSizeFourPortrait : styles.sectionSizeFourHorizontal}>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-left"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-right"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                </View>
                <View>
                  <Fontisto
                    name="arrow-expand"
                    size={40}
                    color={orange}
                  />
                </View>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-left"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-right"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                </View>
              </Section>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => this.props.navigation.navigate('Timer', { number: 31 })}
              onPress={() => this._scanForDevices()}
            >
              <Section style={viewMode === "portrait" ? styles.sectionSizeFourPortrait : styles.sectionSizeFourHorizontal}>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-left"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-right"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <View style={{ marginRight: 75 }}>
                    <FontAwesome
                      name="long-arrow-up"
                      size={30}
                      color={orange}
                    />
                    <FontAwesome
                      name="long-arrow-down"
                      size={30}
                      color={orange}
                    />
                  </View>
                  <View>
                    <FontAwesome
                      name="long-arrow-up"
                      size={30}
                      color={orange}
                    />
                    <FontAwesome
                      name="long-arrow-down"
                      size={30}
                      color={orange}
                    />
                  </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-left"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="long-arrow-right"
                    size={30}
                    color={orange}
                  />
                  <FontAwesome
                    name="dot-circle-o"
                    size={30}
                    color={orange}
                  />
                </View>
              </Section>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    darkMode: state.ui.darkMode
  }
}

export default connect(mapStateToProps, null)(BluetoothDevices)
