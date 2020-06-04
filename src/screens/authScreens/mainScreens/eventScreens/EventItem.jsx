import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { formatDate } from '../../../../utils/formatDate';
import Colors from '../../../../constants/Colors';

const EventItem = ({ event, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.eventContainer}
      onPress={() => navigation.navigate('EventDetail', { event })}
    >
      <View>
        <Image style={styles.eventImg} source={{ uri: event.image_url }} />
      </View>
      <View style={styles.eventContent}>
        <Text style={styles.eventTitle}>{event.name}</Text>
        <View style={styles.icon_text}>
          <AntDesign name="table" size={30} color="gray" />
          <Text style={styles.eventTime}>{formatDate(event.time_start)}</Text>
        </View>
        <View style={styles.icon_text}>
          <AntDesign name="enviromento" size={30} color="gray" />
          <Text style={styles.eventTime}>
            {`${event.location.address1}, ${event.location.city}`}
          </Text>
        </View>
        <View>
          <Text numberOfLines={3} style={styles.eventDetail}>
            {event.description}
          </Text>
        </View>
      </View>
      <View style={styles.eventBottom}>
        <Text style={styles.eventCategory}>{event.category}</Text>
        <Text style={styles.eventInterested}>
          {event.attending_count} interested
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  eventContent: {
    backgroundColor: '#fff',
    padding: 15,
    borderBottomColor: '#F8F8F9',
    borderBottomWidth: 2,
  },
  eventImg: {
    height: 120,
    width: '100%',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  eventTitle: {
    fontSize: 19,
    fontFamily: 'open-sans-bold',
    marginBottom: 15,
    color: Colors.default,
  },
  eventAddress: {
    marginLeft: 7,
    fontSize: 15,
    color: '#9FACB9',
    fontFamily: 'open-sans',
  },
  backgroundEvent: {
    width: '100%',
    height: '100%',
  },
  eventContainer: {
    width: screenWidth * 0.8,
    marginBottom: 20,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 15 / 2,
    elevation: 5,
  },
  icon_text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventTime: {
    fontFamily: 'open-sans',
    marginLeft: 7,
    color: '#9FACB9',
    fontSize: 15,
  },
  eventDetail: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
  eventBottom: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  eventCategory: {
    color: '#7CE0FF',
    fontFamily: 'open-sans',
    fontSize: 15,
  },
  eventInterested: {
    color: '#9FACB9',
    fontFamily: 'open-sans',
    fontSize: 15,
  },
});

export default EventItem;
