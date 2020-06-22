import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'

class TrainingsHistory extends Component {
  render() {
    return (
      <View>
        <Text style={{textAlign: "center", fontSize: 30}}>
          {this.props.trainings}
        </Text>
      </View>
    )
  }
}

mapStateToProps = (state) => {
  return {
    trainings: state.trainings.trainings
  }
}

export default connect(mapStateToProps, null)(TrainingsHistory)
