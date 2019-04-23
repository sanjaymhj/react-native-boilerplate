import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import LoginStack from './LoginStack';
import WelcomeStack from './WelcomeStack';
// import DashboardStack from './DashboardStack';

import screens from '../screens';

const topScreenStacks = {};
topScreenStacks[screens.loginStack] = LoginStack;
topScreenStacks[screens.welcomeStack] = WelcomeStack;
// topScreenStacks[screens.dashboardStack] = DashboardStack;

const RNApp = createAppContainer(
  createSwitchNavigator(
    topScreenStacks,
    { initialRouteName: screens.welcomeStack }
  )
);

export default RNApp;
