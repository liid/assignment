import _ from 'underscore';
import { NativeModules, PermissionsAndroid } from 'react-native';

export const call = async () => {
  const hasPermissions = await requestCallPermissions();
  if (hasPermissions) {
    NativeModules.CallModule.call();
  } else {
    throw new Error('Call Permissions Required');
  }
};

export const getCalls = async () => {
  const hasPermissions = await requestCallPermissions();
  if (hasPermissions) {
    try {
      return NativeModules.CallModule.getCalls();
    } catch (error) {
      console.log(error);
    }

    return [];
  }
};

const CALL_PERMISSIONS = [
  PermissionsAndroid.PERMISSIONS.PROCESS_OUTGOING_CALLS,
  PermissionsAndroid.PERMISSIONS.READ_PHONE_STATE,
  PermissionsAndroid.PERMISSIONS.READ_CALL_LOG
];

const requestCallPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple(CALL_PERMISSIONS);

    const count = _.filter(granted, (status, permission) => {
      return status === PermissionsAndroid.RESULTS.GRANTED;
    });

    return (count && count.length) === CALL_PERMISSIONS.length;
  } catch (error) {
    console.log(error);
  }

  return false;
};
