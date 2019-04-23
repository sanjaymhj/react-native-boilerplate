import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import loginStack from './loginStack';
import welcomeStack from './welcomeStack';
// import DashboardStack from './DashboardStack';

import screens from '../screens';

const topScreenStacks = {};
topScreenStacks[screens.loginStack] = loginStack;
topScreenStacks[screens.welcomeStack] = welcomeStack;
// topScreenStacks[screens.dashboardStack] = DashboardStack;

const RNApp = createAppContainer(
  createSwitchNavigator(
    topScreenStacks,
    { initialRouteName: screens.welcomeStack }
  )
);

export default RNApp;
