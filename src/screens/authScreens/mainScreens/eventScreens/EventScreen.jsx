import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from 'react-native';
import EventItem from './EventItem';

const EventScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.bodyContainer}>
        <EventItem navigation={navigation} />
        <EventItem />
        <EventItem />
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
