import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const Header = ({ title, isDrawer, navigation }) => {
  return (
    <LinearGradient
      colors={Colors.gradient}
      start={[0, 1]}
      end={[1, 0]}
      style={styles.header}
    >
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        {isDrawer ? (
          <View style={styles.button}>
            <Ionicons
              name="ios-menu"
              color="white"
              size={40}
              onPress={() => navigation.toggleDrawer()}
            />
          </View>
        ) : null}
        <View style={styles.headerTitle}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45,
  },
  button: {
    position: 'absolute',
    left: 0,
    marginTop: 15,
    marginLeft: 20,
  },
  headerTitle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'open-sans-bold',
    fontSize: 23,
    color: 'white',
    letterSpacing: 1,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default withNavigation(Header);
