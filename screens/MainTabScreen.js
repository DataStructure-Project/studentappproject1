import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import SearchScreen from './SearchScreen';
import LoginScreen from './LoginScreen';
import TopRatingScreen from './TopRatingScreen';
import ProfileScreen from './ProfileScreen';
//import TopRatingScreen from './TopRatingScreen';
const HomeStack = createStackNavigator();
const LoginStack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator
    initialRouteName="Home"
    tabBarOptions={{
      activeTintColor: '#e91e63',
    }}>
    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#009387',
        tabBarIcon: ({ color }) => (
          <Icon name="md-home" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarLabel: 'Updates',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Icon name="md-search" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="TopRating"
      component={TopRatingScreen}
      options={{
        tabBarLabel: 'TopRating',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Icon name="md-medal" color={color} size={26} />
        ),
      }}
    />

    <Tab.Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#697fad',
        tabBarIcon: ({ color }) => (
          <Icon name="md-person" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </HomeStack.Navigator>
);
const LoginStackScreen = ({ navigation }) => (
  <LoginStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <LoginStack.Screen
      name="Home"
      component={HomeScreen}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button
            name="md-menu"
            size={25}
            backgroundColor="#009387"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </LoginStack.Navigator>
);
