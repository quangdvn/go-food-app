import React from 'react';
import { View, Dimensions } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import Colors from '../constants/Colors';
import SideBar from '../components/SideBar';
import Header from '../components/Icon/CustomeHeader';
import Logout from '../components/Icon/CustomLogout';
import { MaterialIcons } from '@expo/vector-icons';

//* All the Screens
import HomeStack from './HomeNavigation';
import BookmarkScreen from '../screens/authScreens/BookmarkScreen';
import NotificationScreen from '../screens/authScreens/NotificationScreen';
import ReservationScreen from '../screens/authScreens/ReservationScreen';

const BookmarkStack = createStackNavigator({
  Bookmark: {
    screen: BookmarkScreen,
    navigationOptions: () => {
      return {
        header: () => <Header title="Bookmark" isDrawer />,
      };
    },
  },
});

const NotificationStack = createStackNavigator({
  Notification: {
    screen: NotificationScreen,
    navigationOptions: () => {
      return {
        header: () => <Header title="Notification" isDrawer />,
      };
    },
  },
});

const ReservationStack = createStackNavigator({
  Reservation: {
    screen: ReservationScreen,
    navigationOptions: () => {
      return {
        header: () => <Header title="Reservation" isDrawer />,
      };
    },
  },
});

const MainStack = createDrawerNavigator(
  {
    HomeStack: {
      screen: HomeStack,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="restaurant-menu" size={26} color={tintColor} />
        ),
      },
    },
    BookmarkStack: {
      screen: BookmarkStack,
      navigationOptions: {
        drawerLabel: 'Bookmark',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="bookmark-border" size={26} color={tintColor} />
        ),
      },
    },

    ReservationStack: {
      screen: ReservationStack,
      navigationOptions: {
        drawerLabel: 'Reservation',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons name="event-available" size={26} color={tintColor} />
        ),
      },
    },
    NotificationStack: {
      screen: NotificationStack,
      navigationOptions: {
        drawerLabel: 'Notification',
        drawerIcon: ({ tintColor }) => (
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={tintColor}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'HomeStack',
    contentComponent: props => (
      <View>
        <SideBar {...props} />
        <Logout />
      </View>
    ),
    hideStatusBar: true,
    drawerWidth: Dimensions.get('window').width * 0.8,
    contentOptions: {
      inactiveTintColor: Colors.default,
      activeTintColor: Colors.accent,
      itemsContainerStyle: {
        marginTop: 16,
        marginHorizontal: 8,
      },
      itemStyle: {
        borderRadius: 4,
        marginBottom: 20,
      },
      labelStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
      },
    },
  }
);

export default MainStack;
