import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const ReservationScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        You have made 0 reservation(s)
      </Text>
      <View style={styles.listContainer}>
        <View style={styles.empty}>
          <Text style={styles.emptyString}>
            Find out some restaurants and make your 1st reservation !
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

export default ReservationScreen;
