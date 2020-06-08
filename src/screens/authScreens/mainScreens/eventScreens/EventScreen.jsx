import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
  ScrollView,
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
    <View style={styles.container}>
      {eventList ? (
        <View style={styles.bodyContainer}>
          {eventList.count ? (
            <View>
              {eventList.featuredEvent ? (
                <View>
                  <Text style={styles.labelTxt}>Featured event</Text>

                  <EventItem
                    event={eventList.featuredEvent}
                    navigation={navigation}
                  />
                </View>
              ) : (
                <View></View>
              )}
              <Text style={styles.labelTxt}>Normal events</Text>
              <FlatList
                data={eventList.normalEvents}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <EventItem event={item} navigation={navigation} />
                )}
                showsVerticalScrollIndicator={false}
              />
            </View>
          ) : (
            <View style={{ height: '100%' }}>
              <Text style={styles.labelTxt}>Don't have any events </Text>
            </View>
          )}
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
  labelTxt: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    marginBottom: 10,
    color: Colors.default,
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
