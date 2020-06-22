import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Vibration } from 'react-native';
import { Notifications } from 'expo';
import { useDispatch } from 'react-redux';
import { getUser } from '../../store/actions';
import { registerForPushNotificationsAsync } from '../../services/pushNotification';
import Colors from '../../constants/Colors';

const LoadingScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleNotification = notification => {
    if (notification.origin === 'selected') {
      navigation.navigate('Notification');
    } else if (notification.origin === 'received') {
      Vibration.vibrate();
    }

    // navigation.navigate('Notification');
  };

  useEffect(() => {
    Notifications.addListener(handleNotification);

    return () => {
      // Notifications.remove();
      console.log('Bye');
    };
  }, []);

  useEffect(() => {
    registerForPushNotificationsAsync();
    dispatch(getUser());
  }, [getUser]);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={Colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
