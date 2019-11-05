import React from 'react';
import { Icon } from 'react-native-elements';
import { PropTypes } from 'prop-types';

const TabBarIcon = ({ focused, horizontal, name, tintColor }) => {
  return <Icon color={tintColor} name={name} type="material-icon" />;
};

TabBarIcon.propTypes = {
  focused: PropTypes.bool.isRequired,
  horizontal: PropTypes.bool.isRequired,
  name: PropTypes.oneOf(['call', 'list']).isRequired,
  tintColor: PropTypes.string.isRequired
};

export default TabBarIcon;
