import React from 'react';
import { View } from 'react-native';

const Section = (props) => {
  return (
      <View {...props} style={[styles.containerStyle, props.style]}>
        {props.children}
      </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 3,
    padding: 15,
    backgroundColor: '#eee',
    //flexDirection: 'column',
    borderColor: '#FF7400',
    justifyContent: 'center',
    alignItems: 'center',
  }
}

export default Section;