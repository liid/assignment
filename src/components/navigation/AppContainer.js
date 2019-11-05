import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from './TabBarIcon';

import { CallScreen, ListScreen } from '../../screens';
import { primaryColor } from '../../styles';

const AppNavigator = createMaterialBottomTabNavigator(
  {
    Call: {
      screen: CallScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <TabBarIcon
            focused={focused}
            horizontal={horizontal}
            name="call"
            tintColor={tintColor}
          />
        ),
        title: 'Call'
      }
    },
    List: {
      screen: ListScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, horizontal, tintColor }) => (
          <TabBarIcon
            focused={focused}
            horizontal={horizontal}
            name="list"
            tintColor={tintColor}
          />
        ),
        title: 'Call History'
      }
    }
  },
  {
    initialRouteName: 'Call',
    activeColor: 'white',
    inactiveColor: '#3e2465',
    barStyle: { backgroundColor: primaryColor }
  }
);

export default createAppContainer(AppNavigator);
