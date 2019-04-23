import PropTypes from 'prop-types';
import { View } from 'react-native';
import React, { Component } from 'react';

import styles from './styles';

import screens from '../';

class Welcome extends Component {
  componentDidMount() {
    // TODO: Data check to send to next screen
    setTimeout(() => {
      // const { auth } = this.props;
      // if (Object.keys(auth).length === 0) {
      this.props.navigation.navigate(screens.loginStack);

      // return;
      // }
      // this.props.navigation.navigate(screens.dashboardStack);
    }, 300);
  }

  render() {
    return (
      <View style={styles.container} />
    );
  }
}

Welcome.propTypes = {
  auth: PropTypes.object,
  navigation: PropTypes.object
};

export default Welcome;
