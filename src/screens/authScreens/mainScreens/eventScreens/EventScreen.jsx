import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import EventItem from './EventItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../../../../store/actions/serviceAction';
import Colors from '../../../../constants/Colors';

const EventScreen = ({ navigation }) => {
  const { eventList } = useSelector(state => state.service);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [getAllEvents]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodyContainer}>
        {eventList.length ? (
          eventList.map(event => (
            <EventItem event={event} navigation={navigation} />
          ))
        ) : (
          <ActivityIndicator size="large" color={Colors.primary} />
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
  },
  backgroundImg: {
    width: '100%',
  },
  bodyContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
});

export default EventScreen;
