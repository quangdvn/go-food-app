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

const EventItem = ({ event, navigation }) => {
  return (
    <TouchableOpacity
      style={styles.eventContainer}
      onPress={() => navigation.navigate('EventDetail', { event })}
    >
      <View>
        <Image
          style={styles.eventImg}
          source={{ uri: event.image_url }}
        ></Image>
      </View>
      <View style={styles.eventContent}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            marginBottom: 15,
            color: '#44566C',
          }}
        >
          {event.name}
        </Text>
        <View style={styles.icon_text}>
          <AntDesign name="table" size={30} />
          <Text style={{ marginLeft: 7, color: '#9FACB9' }}>
            {event.time_start}
          </Text>
        </View>
        <View style={styles.icon_text}>
          <AntDesign name="enviromento" size={30} />
          <Text style={{ marginLeft: 7, color: '#9FACB9' }}>
            {`${event.location.address1}, ${event.location.city}`}
          </Text>
        </View>
        <View style={styles.eventDetail}>
          <Text numberOfLines={3}>{event.description}</Text>
        </View>
      </View>
      <View style={styles.eventBottom}>
        <Text style={{ color: '#7CE0FF' }}>{event.category}</Text>
        <Text style={{ color: '#9FACB9' }}>
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
  backgroundEvent: {
    width: '100%',
    height: '100%',
  },
  eventContainer: {
    width: screenWidth * 0.8,
    marginBottom: 20,
  },
  icon_text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  eventDetail: {},
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
});

export default EventItem;
