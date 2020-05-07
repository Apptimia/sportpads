import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { Stopwatch, Timer } from 'react-native-stopwatch-timer'
import Section from '../../components/section'
import Icon from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const windowHeight = Dimensions.get("window").height
const windowWidth = Dimensions.get("window").width

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
        console.log(this.props.route.params.number)
        // Dimensions.addEventListener('change', () => {
        //     this.setState({
        //       orientation: isPortrait() ? 'portrait' : 'landscape'
        //     });
        //   });
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
  
      const randomNumber = Math.floor(Math.random() * (bluetoothArray.length+1))
      this.setState({ blueToothDevices: randomNumber })
    }

    toggleTimer = () => {
      this.setState({timerStart: !this.state.timerStart, timerReset: false})
    }

    resetTimer = () => {
      this.setState({timerStart: false, timerReset: true});
    }
  
    toggleStopwatch = () => {
      this.setState({stopwatchStart: !this.state.stopwatchStart, stopwatchReset: false});
    }
  
    resetStopwatch = () => {
      this.setState({stopwatchStart: false, stopwatchReset: true});
    }
    
    getFormattedTime = (time) => {
        this.currentTime = time;
    };

    horizontalView = () => {
      return (
        <View style={{flex: 1}}>
        <View style={{flexDirection: "row"}}>
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
                <Section style={{width: "50%", height: windowHeight * 0.81, justifyContent: "center"}}>
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
                <Section style={{width: "50%", height: windowHeight * 0.81, justifyContent: "center"}}>
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
       <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
       <Stopwatch 
          laps msecs start={this.state.stopwatchStart}
          reset={this.state.stopwatchReset}
          options={options}
          getTime={this.getFormattedTime} 
        />
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                  <TouchableOpacity onPress={this.toggleStopwatch}>
                    <Icon 
                      name={!this.state.stopwatchStart ? "play-circle" : "pause-circle"}
                      size={60}
                      color="#FF7400"
                      style={{marginRight: 20}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={this.resetStopwatch}>
                      <Icon 
                        name="stop-circle"
                        size={60}
                        color="#FF7400"
                      />
                  </TouchableOpacity>
                </View>
        </View>
        </View>
        </View>
      )
    }

    portraitView = () => {
      return (
        <View style={{ flex: 1 }}>
                {this.props.route.params.number === 2 && (
                <Section>
                <TouchableOpacity onPress={() => console.log("test")}>
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
                <Section style={{height: "50%"}}>
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
                <Section style={{height: "50%"}}>
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
                  getTime={this.getFormattedTime} 
                />
                <View style={{ marginTop: 30}}>
                <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <TouchableOpacity onPress={this.toggleStopwatch}>
                  <Icon 
                        name={!this.state.stopwatchStart ? "play-circle" : "pause-circle"}
                        size={60}
                        color="#FF7400"
                        style={{marginRight: 20}}
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={this.resetStopwatch}>
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

    render() {
        return (
            this.state.viewMode === "portrait" ? this.portraitView() : this.horizontalView()
        )
    }
}

// const horizontalView = () => {
//   return (
//     <View>
//       <Text>TEST</Text>
//     </View>
//   )
// }

// const portraitView = () => {
//   return (
//     <View style={{ flex: 1 }}>
//             {this.props.route.params.number === 2 && (
//             <Section>
//             <TouchableOpacity onPress={() => console.log("test")}>
//                 <FontAwesome
//                   name="dot-circle-o"
//                   size={this.state.randomNumber <= 2 ? 100 : 35}
//                   color="#FF7400"
//                 />
//             </TouchableOpacity>
//                 <FontAwesome
//                   name="long-arrow-up"
//                   size={this.state.randomNumber <= 2 ? 100 : 35}
//                   color="#FF7400"
//                 />
//                 <FontAwesome
//                   name="long-arrow-down"
//                   size={this.state.randomNumber <= 2 ? 100 : 35}
//                   color="#FF7400"
//                 />
//             <TouchableOpacity>
//                 <FontAwesome
//                   name="dot-circle-o"
//                   size={this.state.randomNumber <= 2 ? 100 : 35}
//                   color="#FF7400"
//                 />
//             </TouchableOpacity>
//               </Section>
//             )}

//             {this.props.route.params.number === 31 && (
//             <Section style={{height: "50%"}}>
//             <FontAwesome
//                     name="dot-circle-o"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-up"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-down"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="dot-circle-o"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-up"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-down"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="dot-circle-o"
//                     size={30}
//                     color="#FF7400"
//                   />
//               </Section>
//             )}

//             {this.props.route.params.number === 32 && (
//             <Section>
//             <View style={{ flexDirection: "row"}}>
//                 <FontAwesome
//                     name="dot-circle-o"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-left"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-right"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="dot-circle-o"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   </View>
//                   <View style={{ flexDirection: "row" }}>
//                   <View style={{ transform: [{ rotate: '-30deg'}], marginRight: 15 }}>
//                   <FontAwesome
//                     name="long-arrow-up"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-down"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   </View>
//                   <View style={{ transform: [{ rotate: '30deg'}], marginLeft: 15 }}>
//                   <FontAwesome
//                     name="long-arrow-up"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   <FontAwesome
//                     name="long-arrow-down"
//                     size={30}
//                     color="#FF7400"
//                   />
//                   </View>
//                   </View>
//                   <FontAwesome
//                     name="dot-circle-o"
//                     size={30}
//                     color="#FF7400"
//                   />
//               </Section>
//             )}
            
//             <Stopwatch laps msecs start={this.state.stopwatchStart}
//               reset={this.state.stopwatchReset}
//               options={options}
//               getTime={getFormattedTime} 
//             />
//             <View style={{ marginTop: 120}}>
//             <View style={{ flexDirection: "row", justifyContent: "center" }}>
//             <TouchableOpacity onPress={toggleStopwatch}>
//               <Icon 
//                     name={!this.state.stopwatchStart ? "play-circle" : "pause-circle"}
//                     size={60}
//                     color="#FF7400"
//                     style={{marginRight: 20}}
//                 />
//             </TouchableOpacity>
//             <TouchableOpacity onPress={resetStopwatch}>
//                 <Icon 
//                     name="stop-circle"
//                     size={60}
//                     color="#FF7400"
//                 />
//             </TouchableOpacity>
//             </View>
//             </View>
//           </View>
//   )
// }

const options = {
  container: {
    backgroundColor: '#eee',
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