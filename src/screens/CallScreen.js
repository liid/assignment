import React from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';

import { primaryColor } from '../styles';

const CallScreen = () => {
  const handlePress = () => {
    Alert.alert('TODO', 'Implement Call Feature');
  };

  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Icon
        color={primaryColor}
        name="call"
        onPress={handlePress}
        reverse
        size={36}
        type="material-icon"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  textStyle: {
    textAlign: 'center'
  }
});

export default CallScreen;
