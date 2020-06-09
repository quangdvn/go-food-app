import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const NotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>It's bored here !</Text>
      <View style={styles.listContainer}>
        <View style={styles.empty}>
          <Text style={styles.emptyString}>
            Try out some features in Go Food and see this place crowded later
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  title: {
    color: Colors.default,
    marginVertical: 15,
    marginHorizontal: 20,
    textTransform: 'uppercase',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  listContainer: {
    flex: 1,
    marginVertical: 10,
    marginHorizontal: 40,
  },
  empty: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 15,
  },
  emptyString: {
    fontFamily: 'open-sans',
    fontSize: 17,
    textAlign: 'center',
  },
});

export default NotificationScreen;
