import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Bui Quang Huy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginLeft: 10,
  },
});

export default AccountScreen;
