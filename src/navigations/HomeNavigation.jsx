import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Header from '../components/Icon/CustomeHeader';

//* All the Screens
import RestaurantScreen from '../screens/authScreens/mainScreens/RestaurantScreen';
import SearchScreen from '../screens/authScreens/mainScreens/SearchScreen';
import RestaurantDetailScreen from '../screens/authScreens/mainScreens/RestaurantDetailScreen';
import AccountScreen from '../screens/authScreens/mainScreens/AccountScreen';
import EventScreen from '../screens/authScreens/mainScreens/EventScreen';
import EventDetailScreen from '../screens/authScreens/mainScreens/EventDetailScreen';

const RestaurantStack = createStackNavigator({
  Restaurant: {
    screen: RestaurantScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },

  Search: {
    screen: SearchScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  RestaurantDetail: {
    screen: RestaurantDetailScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});

const EventStack = createStackNavigator({
  RestaurantDetail: {
    screen: RestaurantDetailScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
  Event: {
    screen: EventScreen,
    navigationOptions: () => {
      return {
        header: () => <Header title="Events" />,
      };
    },
  },
  EventDetail: {
    screen: EventDetailScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});

const AccountStack = createStackNavigator({
  Account: {
    screen: AccountScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});

const tabScreenConfig = {
  RestaurantStack: {
    screen: RestaurantStack,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) =>
        focused ? (
          <Ionicons name="md-home" size={45} color={tintColor} />
        ) : (
          <Ionicons name="md-home" size={40} color={tintColor} />
        ),
      tabBarColor: Colors.primary,
    },
  },
  EventStack: {
    screen: EventStack,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) =>
        focused ? (
          <Ionicons name="md-calendar" size={45} color={tintColor} />
        ) : (
          <Ionicons name="md-calendar" size={40} color={tintColor} />
        ),
    },
  },
  AccountStack: {
    screen: AccountStack,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) =>
        focused ? (
          <Ionicons name="md-person" size={45} color={tintColor} />
        ) : (
          <Ionicons name="md-person" size={40} color={tintColor} />
        ),
    },
  },
};

const HomeStack = createBottomTabNavigator(tabScreenConfig, {
  tabBarOptions: {
    activeTintColor: Colors.primary,
    showLabel: false,
  },
});

export default HomeStack;