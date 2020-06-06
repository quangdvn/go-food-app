import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import Header from '../components/Icon/CustomeHeader';

//* All the Screens
import RestaurantScreen from '../screens/authScreens/mainScreens/restaurantScreens/RestaurantScreen';
import SearchScreen from '../screens/authScreens/SearchScreen';
import SearchResultScreen from '../screens/authScreens/SearchResultScreen';
import RestaurantDetailScreen from '../screens/authScreens/mainScreens/restaurantScreens/RestaurantDetailScreen';
import AccountScreen from '../screens/authScreens/mainScreens/accountScreens/AccountScreen';
import EventScreen from '../screens/authScreens/mainScreens/eventScreens/EventScreen';
import EventDetailScreen from '../screens/authScreens/mainScreens/eventScreens/EventDetailScreen';
import MapScreen from '../screens/authScreens/MapScreen';

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
        ...TransitionPresets.ModalSlideFromBottomIOS,
      };
    },
  },
  SearchResult: {
    screen: SearchResultScreen,
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
        tabBarVisible: false,
      };
    },
  },
  Map: {
    screen: MapScreen,
    navigationOptions: () => {
      return {
        headerShown: false,
      };
    },
  },
});

// RestaurantStack.navigationOptions = ({ navigation }) => {
//   let tabBarVisible;
//   if (navigation.state.routes.length > 1) {
//     navigation.state.routes.map(route => {
//       if (route.routeName === 'CustomHide') {
//         tabBarVisible = false;
//       } else {
//         tabBarVisible = true;
//       }
//     });
//   }

//   return {
//     tabBarVisible,
//   };
// };

const EventStack = createStackNavigator(
  {
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
  },
  {
    headerMode: 'screen',
  }
);

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
    navigationOptions: ({ navigation }) => {
      return {
        tabBarVisible: navigation.state.index < 1,
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <Ionicons name="md-home" size={45} color={tintColor} />
          ) : (
            <Ionicons name="md-home" size={40} color={tintColor} />
          ),
        tabBarColor: Colors.primary,
      };
    },
  },
  EventStack: {
    screen: EventStack,
    navigationOptions: ({ navigation }) => {
      return {
        tabBarVisible: navigation.state.index < 1,
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <Ionicons name="md-calendar" size={45} color={tintColor} />
          ) : (
            <Ionicons name="md-calendar" size={40} color={tintColor} />
          ),
        tabBarColor: Colors.primary,
      };
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
      tabBarColor: Colors.primary,
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
