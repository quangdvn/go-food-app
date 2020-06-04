import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
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
    <View style={styles.container}>
      {eventList.length ? (
        <View style={styles.bodyContainer}>
          <FlatList
            data={eventList}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <EventItem event={item} navigation={navigation} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    top: 0,
    left: 0,
  },
  loading: {
    marginTop: 50,
  },
  backgroundImg: {
    width: '100%',
  },
  bodyContainer: {
    height: '100%',
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
