import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import {
  Icon_bookmarked,
  Icon_bookmark,
} from '../../../../components/Icon/TestLogo';
import { getUser } from '../../../../store/actions/authAction';
import AccountInfoForm from './AccountInfoForm';

const AccountScreen = ({ navigation }) => {
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [getUser]);

  const handleSumitForm = formData => {
    console.log('formData', formData);
  };
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={require('../../../../../assets/images/drawer_header.png')}
        style={styles.backgroundImg}
      >
        <View style={styles.containerProfile}>
          <Image
            source={require('../../../../../assets/images/test.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>{user.fullname}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
      </ImageBackground>
      <View style={styles.thumbnails}>
        <View style={styles.thumbnailsIcon}>
          <Icon_bookmarked />
          <Text>2 like(s)</Text>
        </View>
        <View style={styles.thumbnailsIcon}>
          <Icon_bookmark />
          <Text>3 eat out(s)</Text>
        </View>
        <View style={styles.thumbnailsIcon}>
          <Icon_bookmarked />
          <Text>{user.bookmarkPlaces?.length} bookmark(s)</Text>
        </View>
      </View>
      <AccountInfoForm handleSubmit={handleSumitForm} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    marginLeft: 0,
  },
  containerProfile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 30,
  },
  backgroundImg: {
    width: '100%',
  },
  error: {
    color: 'crimson',
    fontFamily: 'open-sans',
  },
  name: {
    color: '#44566c',
    fontSize: 25,
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  email: {
    color: '#fff',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#FFF',
  },
  thumbnails: {
    height: 120,
    borderBottomWidth: 2,
    borderBottomColor: '#fff',
    paddingLeft: 65,
    paddingRight: 65,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  thumbnailsIcon: {
    alignItems: 'center',
  },
  label: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
  },
});

export default AccountScreen;
