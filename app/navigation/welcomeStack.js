import { createStackNavigator } from 'react-navigation';

import Welcome from '../screens/Welcome';
import screens from '../screens';

const welcomeScreens = {};

welcomeScreens[screens.welcome] = {
  screen: Welcome
};

export default createStackNavigator(welcomeScreens, {
  initialRouteName: screens.welcome,
  mode: 'card',
  headerMode: 'none'
});
