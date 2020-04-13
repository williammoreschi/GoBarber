import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

import Dashboard from './pages/Dashboard';

export default (singedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sing: createSwitchNavigator({
          SingIn,
          SingUp,
        }),
        App: createBottomTabNavigator({
          Dashboard,
        }),
      },
      {
        initialRouteName: singedIn ? 'App' : 'Sing',
      },
    ),
  );
