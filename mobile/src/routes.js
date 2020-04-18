import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SingIn from '~/pages/SingIn';
import SingUp from '~/pages/SingUp';

import SelectProvider from '~/pages/New/SelectProvider';
import SelectDateTime from '~/pages/New/SelectDateTime';
import Confirm from '~/pages/New/Confirm';

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
            New: {
              screen: createStackNavigator(
                {
                  SelectProvider,
                  SelectDateTime,
                  Confirm,
                },
                {
                  defaultNavigationOptions: {
                    headerTransparent: true,
                    headerTintColor: '#fff',
                    headerLeftContainerStyle: {
                      marginLeft: 20,
                    },
                  },
                },
              ),
              navigationOptions: {
                tabBarVisible: false,
                tabBarLabel: 'Agendar',
                tabBarIcon: (
                  <Icon
                    name="add-circle-outline"
                    size={20}
                    color="rgba(255,255,255,0.6)"
                  />
                ),
              },
            },
            Profile,
          },
          {
            resetOnBlur: true,
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
