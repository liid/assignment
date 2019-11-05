import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PropTypes } from 'prop-types';

import { CallIcon } from '../icons';

const Call = ({ data: { answered } }) => {
  const { containerStyle, fieldContainerStyle } = styles;
  return (
    <View style={containerStyle}>
      <CallIcon answered={answered} />
      <View style={fieldContainerStyle}>
        <Text>Implement Call Details</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 20
  },
  fieldContainerStyle: {
    paddingLeft: 15,
    paddingRight: 15
  }
});

Call.propTypes = {
  data: PropTypes.shape({
    answered: PropTypes.bool.isRequired,
    duration: PropTypes.number.isRequired,
    inbound: PropTypes.bool.isRequired,
    number: PropTypes.string.isRequired
  }).isRequired
};

export default Call;
