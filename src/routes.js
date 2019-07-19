import React from "react";

import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import Icon from "react-native-vector-icons/MaterialIcons";

import SingIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

import Dashboard from "./pages/Dashboard";
import Stack from "./pages/New";
import Profile from "./pages/Profile";

export default createAppContainer(
  createSwitchNavigator(
    {
      auth: createSwitchNavigator({
        SingIn,
        SignUp
      }),
      App: createBottomTabNavigator(
        {
          Dashboard,
          New: {
            screen: createStackNavigator(
              { Stack },
              {
                defaultNavigationOptions: {
                  headerTransparent: true,
                  headerTintColor: "#000",
                  headerLeftContainerStyle: {
                    marginLeft: 20
                  }
                }
              }
            ),
            navigationOptions: {
              tabBarVisible: false,
              tabBarLabel: "Agendar",
              tabBarIcon: (
                <Icon
                  name="add-circle-outline"
                  size={20}
                  color="rgba(255,255,255,0.6)"
                />
              )
            }
          },
          Profile
        },
        {
          tabBarOptions: {
            keyboardHidesTabBar: true,
            activeTintColor: "#fff",
            inactiveTintColor: "rgba(255,255,255,0.6)",
            style: {
              backgroundColor: "#8d41a8"
            }
          }
        }
      )
    },
    {
      initialRouteName: "auth"
    }
  )
);
