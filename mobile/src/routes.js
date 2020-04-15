import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';

export default (singedIn = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sing: createSwitchNavigator({
          SingIn,
          SingUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
          },
          {
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255,0.6)',
              style: {
                backgroundColor: '#8d41a5',
              },
            },
          },
        ),
      },
      {
        initialRouteName: singedIn ? 'App' : 'Sing',
      },
    ),
  );
