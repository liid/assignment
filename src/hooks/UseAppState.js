import { useState, useEffect } from 'react';
import { AppState } from 'react-native';

const useAppState = settings => {
  const { onBackground, onChange, onForeground } = settings || {};
  const [appState, setAppState] = useState(AppState.currentState);

  const handleCallback = f => {
    if (isValidFunction(f)) {
      f();
    }
  };

  const handleAppStateChange = nextAppState => {
    if (nextAppState === 'active') {
      handleCallback(onForeground);
    } else if (nextAppState.match(/inactive|background/)) {
      handleCallback(onBackground);
    }

    setAppState(nextAppState);
    handleCallback(onChange(nextAppState));
  };

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    return () => AppState.removeEventListener('change', handleAppStateChange);
  }, []);

  const isValidFunction = f => {
    return f && typeof f === 'function';
  };

  return { appState };
};

export default useAppState;
