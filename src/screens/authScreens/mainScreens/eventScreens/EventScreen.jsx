import React, { useEffect } from 'react';
import { View, StyleSheet, ScrollView, FlatList } from 'react-native';
import EventItem from './EventItem';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEvents } from '../../../../store/actions/serviceAction';

const EventScreen = ({ navigation }) => {
  const { eventList } = useSelector(state => state.service);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllEvents());
  }, [getAllEvents]);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodyContainer}>
        {
          <FlatList
            data={eventList}
            renderItem={({ item }) => (
              <EventItem event={item} navigation={navigation} />
            )}
            keyExtractor={item => item.id}
          />
        }
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
