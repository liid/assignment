import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import { AppContainer } from './src/components/navigation';

const App: () => React$Node = () => {
  const { containerStyle } = styles;
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={containerStyle}>
        <AppContainer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1
  }
});

export default App;
