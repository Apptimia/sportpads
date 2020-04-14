import React, { Component } from "react";
import { Animated, Easing } from "react-native";

class Fade extends Component {

  componentDidMount() {
    this.fadeValue = new Animated.Value(0);
    try {
      this.fadeIn();
    } catch (e) {
      this.fadeValue = 1;
    }
  }

  fade(value) {
    Animated.timing(this.fadeValue, {
      toValue: value,
      duration: 500,
      easing: Easing.linear
    }).start();
  }

  fadeIn() {
    this.fadeValue.setValue(0);
    this.fade(1);
  }

  render() {
    const { style, children, ...rest } = this.props;

    const containerStyle = {
      opacity: this.fadeValue
    };

    const combinedStyle = [style, containerStyle];
    return (
      <Animated.View style={combinedStyle} {...rest}>
        {children}
      </Animated.View>
    );
  }
}

export default Fade