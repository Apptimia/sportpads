import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import { Stopwatch } from 'react-native-stopwatch-timer'
import Section from '../../components/section'
import Icon from 'react-native-vector-icons/FontAwesome'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as lor,
  removeOrientationListener as rol
} from 'react-native-responsive-screen'
import { ThreeCirclesTraining, TriangleTraining } from '../../components/trainings'
import { connect } from 'react-redux'

class TimerScreen extends Component {

  state = {
    blueToothDevices: 0,
    timerStart: false,
    stopwatchStart: false,
    totalDuration: 90000,
    timerReset: false,
    stopwatchReset: false,
    viewMode: Dimensions.get("window").height > Dimensions.get("window").width ? "portrait" : "landscape"
  }

  componentDidMount() {
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

  isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  /**
   * Returns true of the screen is in landscape mode
   */
  isLandscape = () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  };

  getRandomNumber = () => {
    const bluetoothArray = [1, 2, 3, 4]

    const randomNumber = Math.floor(Math.random() * (bluetoothArray.length + 1))
    this.setState({ blueToothDevices: randomNumber })
  }

  toggleTimer = () => {
    this.setState({ timerStart: !this.state.timerStart, timerReset: false })
  }

  resetTimer = () => {
    this.setState({ timerStart: false, timerReset: true });
  }

  toggleStopwatch = () => {
    this.setState({ stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false });
  }

  resetStopwatch = () => {
    this.setState({ stopwatchStart: false, stopwatchReset: true });
  }

  getFormattedTime = (time) => {
    this.currentTime = time;
  };

  horizontalView = (styles) => {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.rowDirection}>
          {this.props.route.params.number === 2 && (
            <Section>
              <TouchableOpacity>
                <FontAwesome
                  name="dot-circle-o"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color={orange}
                />
              </TouchableOpacity>
              <FontAwesome
                name="long-arrow-up"
                size={this.state.randomNumber <= 2 ? 100 : 35}
                color={orange}
              />
              <FontAwesome
                name="long-arrow-down"
                size={this.state.randomNumber <= 2 ? 100 : 35}
                color={orange}
              />
              <TouchableOpacity>
                <FontAwesome
                  name="dot-circle-o"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color={orange}
                />
              </TouchableOpacity>
            </Section>
          )}

          {this.props.route.params.number === 31 && (
            <Section style={[styles.horizontalContainer, { backgroundColor: !this.props.darkMode? "#83807D" : "#eee" }]}>
              <ThreeCirclesTraining
                name1="dot-circle-o"
                name2="long-arrow-up"
                name3="long-arrow-down"
                size={40}
                color={orange}
              />
            </Section>
          )}

          {this.props.route.params.number === 32 && (
            <Section style={[styles.horizontalContainer, { backgroundColor: !this.props.darkMode? "#83807D" : "#eee" }]}>
              <TriangleTraining
                name1="dot-circle-o"
                name2="long-arrow-left"
                name3="long-arrow-right"
                name4="long-arrow-up"
                name5="long-arrow-down"
                size={45}
                color={orange}
              />
            </Section>
          )}
          <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
              <FontAwesome
                name="clock-o"
                color={orange}
                size={30}
              />
              <Stopwatch laps msecs start={this.state.stopwatchStart}
                reset={this.state.stopwatchReset}
                options={options}
                getTime={this.getFormattedTime}
              />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity onPress={this.toggleStopwatch}>
                <Icon
                  name={!this.state.stopwatchStart ? "play-circle" : "pause-circle"}
                  size={60}
                  color={orange}
                  style={{ marginRight: 20 }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={this.resetStopwatch}>
                <Icon
                  name="stop-circle"
                  size={60}
                  color={orange}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }

  portraitView = (styles) => {
    return (
      <View style={{ flex: 1, justifyContent: "space-between" }}>
        {this.props.route.params.number === 2 && (
          <Section>
            <TouchableOpacity onPress={() => console.log("test")}>
              <FontAwesome
                name="dot-circle-o"
                size={this.state.randomNumber <= 2 ? 100 : 35}
                color={orange}
              />
            </TouchableOpacity>
            <FontAwesome
              name="long-arrow-up"
              size={this.state.randomNumber <= 2 ? 100 : 35}
              color={orange}
            />
            <FontAwesome
              name="long-arrow-down"
              size={this.state.randomNumber <= 2 ? 100 : 35}
              color={orange}
            />
            <TouchableOpacity>
              <FontAwesome
                name="dot-circle-o"
                size={this.state.randomNumber <= 2 ? 100 : 35}
                color={orange}
              />
            </TouchableOpacity>
          </Section>
        )}

        {this.props.route.params.number === 31 && (
          <Section style={[styles.portraitContainer, { backgroundColor: !this.props.darkMode? "#83807D" : "#eee" }]}>
            <ThreeCirclesTraining
              name1="dot-circle-o"
              name2="long-arrow-up"
              name3="long-arrow-down"
              size={45}
              color={orange}
            />
          </Section>
        )}

        {this.props.route.params.number === 32 && (
          <Section style={[styles.portraitContainer, { backgroundColor: !this.props.darkMode? "#83807D" : "#eee" }]}>
            <TriangleTraining
              name1="dot-circle-o"
              name2="long-arrow-left"
              name3="long-arrow-right"
              name4="long-arrow-up"
              name5="long-arrow-down"
              size={45}
              color={orange}
            />
          </Section>
        )}

        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <FontAwesome
            name="clock-o"
            color={orange}
            size={30}
          />
          <Stopwatch laps msecs start={this.state.stopwatchStart}
            reset={this.state.stopwatchReset}
            options={options}
            getTime={this.getFormattedTime}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity onPress={this.toggleStopwatch}>
              <Icon
                name={!this.state.stopwatchStart ? "play-circle" : "pause-circle"}
                size={60}
                color={orange}
                style={{ marginRight: 20 }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.resetStopwatch}>
              <Icon
                name="stop-circle"
                size={60}
                color={orange}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }

  render() {
    const styles = StyleSheet.create({
      portraitContainer: {
        height: hp("50%")
      },
      horizontalContainer: {
        width: wp("50%"),
        height: hp("81%"),
        justifyContent: "center",
        alignItems: "center"
      },
      rowDirection: {
        flexDirection: "row"
      },
    })
    return (
      this.state.viewMode === "portrait" ? this.portraitView(styles) : this.horizontalView(styles)
    )
  }
}

const options = {
  container: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    width: 200,
    alignSelf: "center"
  },
  text: {
    fontSize: 30,
    color: 'black',
    marginLeft: 7,
  },
  laps: true
}

const mapStateToProps = state => {
  return {
    darkMode: state.ui.darkMode
  }
}

export default connect(mapStateToProps, null)(TimerScreen)