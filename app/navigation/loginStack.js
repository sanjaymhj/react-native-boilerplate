import { createStackNavigator } from 'react-navigation';

import screens from '../screens';

import Login from '../screens/Login';
// import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';

const loginScreens = {};

loginScreens[screens.login] = {
  screen: Login,
  navigationOptions: { header: null, gestureEnabled: true }
};

// loginScreens[screens.forgotPassword] = {
//   screen: ForgotPassword,
//   navigationOptions: { header: null, gestureEnabled: true }
// };

const loginStack = createStackNavigator(loginScreens, {
  initialRouteName: screens.login,
  mode: 'card'
});

export default loginStack;
