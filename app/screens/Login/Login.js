import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

class Login extends Component {
  navigate = () => {
    this.props.onLogin('username', 'password');
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        <TouchableOpacity onPress={this.navigate}>
          <Text>Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func
};

export default Login;
