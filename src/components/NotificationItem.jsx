import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { MaterialIcons } from '@expo/vector-icons';
import { formatDate } from '../utils/formatDate';

const NotificationItem = ({ item }) => {
  const imageUrl = item.imageUrl;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text numberOfLines={1} style={styles.content}>
          {item.type === 'Event' ? 'INTERESTED MARKED !!' : 'BOOK RESERVED !!'}
        </Text>
        <Text
          numberOfLines={1}
          style={{ ...styles.bookText, fontFamily: 'open-sans' }}
        >
          Book time:{' '}
          <Text style={{ ...styles.bookText, fontFamily: 'open-sans-bold' }}>
            {formatDate(item.time)}
          </Text>
        </Text>
        <Text
          numberOfLines={1}
          style={{ ...styles.bookText, fontFamily: 'open-sans' }}
        >
          Book number:{' '}
          <Text style={{ ...styles.bookText, fontFamily: 'open-sans-bold' }}>
            {item.attenders} person(s)
          </Text>
        </Text>
        <View style={styles.createdAt}>
          <MaterialIcons
            name="event-available"
            size={20}
            color={Colors.primary}
          />
          <Text style={styles.createdText}> {formatDate(item.createdAt)}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: 'gray',
    shadowOpacity: 0.3,
    shadowOffset: {
      width: -2,
      height: 0,
    },
    shadowRadius: 5,
    elevation: 5,
    // borderColor: 'red',
    // borderWidth: 1,
  },
  imageContainer: {
    width: 100,
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    borderWidth: 5,
    borderColor: 'white',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 10,
  },
  content: {
    color: Colors.default,
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
  bookText: {
    color: Colors.default,
    fontSize: 15,
    marginBottom: 5,
  },
  addressText: {
    color: Colors.default,
    fontSize: 15,
    fontFamily: 'open-sans',
    marginBottom: -5,
  },
  createdAt: {
    flexDirection: 'row',
    marginBottom: -5,
  },
  createdText: {
    color: 'gray',
    fontFamily: 'open-sans',
    fontSize: 15,
  },
});

export default NotificationItem;
