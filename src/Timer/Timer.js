import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import Section from '../../components/section'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

class TimerScreen extends Component {

    state = {
        blueToothDevices: 0,
        timerStart: false,
        stopwatchStart: false,
        totalDuration: 90000,
        timerReset: false,
        stopwatchReset: false,
        orientation: 'portrait'
    }

    componentDidMount() {
        console.log(this.props.route.params.number)
        Dimensions.addEventListener('change', () => {
            this.setState({
              orientation: isPortrait() ? 'portrait' : 'landscape'
            });
          });
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

    render() {

        const getRandomNumber = () => {
                  const bluetoothArray = [1, 2, 3, 4]
              
                  const randomNumber = Math.floor(Math.random() * (bluetoothArray.length+1))
                  this.setState({ blueToothDevices: randomNumber })
                }
            
                const toggleTimer = () => {
                  this.setState({timerStart: !this.state.timerStart, timerReset: false})
                }
            
                const resetTimer = () => {
                  this.setState({timerStart: false, timerReset: true});
                }
              
                const toggleStopwatch = () => {
                  this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
                }
              
                const resetStopwatch = () => {
                  this.setState({stopwatchStart: false, stopwatchReset: true});
                }
                
                const getFormattedTime = (time) => {
                    this.currentTime = time;
                };
        return (
            <View style={{ flex: 1 }}>
            {this.props.route.params.number === 2 && (
            <Section>
            <TouchableOpacity>
                <FontAwesome
                  name="dot-circle-o"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color="#FF7400"
                />
            </TouchableOpacity>
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
            <TouchableOpacity>
                <FontAwesome
                  name="dot-circle-o"
                  size={this.state.randomNumber <= 2 ? 100 : 35}
                  color="#FF7400"
                />
            </TouchableOpacity>
              </Section>
            )}

            {this.props.route.params.number === 31 && (
            <Section>
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
            )}

            {this.props.route.params.number === 32 && (
            <Section>
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
              </Section>
            )}
            
            <Stopwatch laps msecs start={this.state.stopwatchStart}
              reset={this.state.stopwatchReset}
              options={options}
              getTime={getFormattedTime} 
            />
            <View style={{ marginTop: 120}}>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity onPress={toggleStopwatch}>
              <Icon 
                    name={!this.state.stopwatchStart ? "play-circle" : "pause-circle"}
                    size={60}
                    color="#FF7400"
                    style={{marginRight: 20}}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={resetStopwatch}>
                <Icon 
                    name="stop-circle"
                    size={60}
                    color="#FF7400"
                />
            </TouchableOpacity>
            </View>
            </View>
          </View>
        )
    }
}

const options = {
  container: {
    backgroundColor: '#eee',
    marginTop: 200,
    borderRadius: 5,
    width: 200,
    alignSelf: "center"
  },
  text: {
    fontSize: 30,
    color: 'black',
    marginLeft: 7,
  }
};

export default TimerScreen