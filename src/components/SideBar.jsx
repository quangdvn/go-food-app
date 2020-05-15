import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
} from 'react-native';
import { DrawerNavigatorItems } from 'react-navigation-drawer';

const SideBar = props => {
  return (
    <ScrollView>
      <ImageBackground
        source={require('../../assets/images/drawer_header.png')}
        style={styles.background}
      >
        <Image
          source={require('../../assets/images/test.png')}
          style={styles.avatar}
        />
        <Text style={styles.name}>Jack Jackson</Text>
        <View>
          <Text style={styles.info}>Tokyo, Japan</Text>
          <Text style={styles.info}>Favorites Place(s): 10</Text>
        </View>
      </ImageBackground>
      <View style={styles.container}>
        <DrawerNavigatorItems {...props} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    width: undefined,
    padding: 20,
    paddingTop: 48,
    paddingBottom: 15,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  name: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  info: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    marginRight: 4,
  },
});

export default SideBar;
