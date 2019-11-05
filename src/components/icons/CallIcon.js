import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { PropTypes } from 'prop-types';

const CallIcon = ({ answered }) => {
  const color = answered ? 'green' : 'red';
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Icon color={color} name="call" type="material-icon" />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 5
  }
});

CallIcon.defaultProps = {
  answered: false
};

CallIcon.propTypes = {
  answered: PropTypes.bool
};

export default CallIcon;
