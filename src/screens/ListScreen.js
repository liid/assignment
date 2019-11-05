import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ListScreen = () => {
  const { containerStyle } = styles;
  return (
    <View style={containerStyle}>
      <Text>Implement Call History</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  }
});

export default ListScreen;
