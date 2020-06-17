import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import LikeIcon from '../../../../components/Icon/Like';
import BookmarkIcon from '../../../../components/Icon/Bookmark';
import EatIcon from '../../../../components/Icon/EatIcon';
import { getUser } from '../../../../store/actions/authAction';
import AccountInfoForm from './AccountInfoForm';
import Colors from '../../../../constants/Colors';

const KEYBOARD_VERTICAL_OFFSET = 0;

const AccountScreen = () => {
  const { user } = useSelector(state => state.auth);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
        style={{ flex: 1 }}
      >
        <ScrollView
          style={styles.container}
          alwaysBounceVertical={false}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <ImageBackground
            source={require('../../../../../assets/images/avatar_background.png')}
            style={styles.backgroundImg}
          >
            <View style={styles.containerProfile}>
              <Image
                source={require('../../../../../assets/images/test.png')}
                style={styles.avatar}
              />
              <View style={styles.profileDetail}>
                <Text style={styles.name}>{user.fullname}</Text>
                <Text style={styles.email}>{user.email}</Text>
              </View>
            </View>
          </ImageBackground>
          <View style={styles.thumbnails}>
            <View style={styles.thumbnailsIcon}>
              <LikeIcon />
              <Text style={styles.thumbnailDetail}>0 like(s)</Text>
            </View>
            <View style={styles.thumbnailsIcon}>
              <EatIcon />
              <Text style={styles.thumbnailDetail}>0 eat out(s)</Text>
            </View>
            <View style={styles.thumbnailsIcon}>
              <BookmarkIcon />
              <Text style={styles.thumbnailDetail}>
                {user.bookmarkPlaces?.length} bookmark(s)
              </Text>
            </View>
          </View>
          <AccountInfoForm userInfo={user} />
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
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
    marginVertical: 30,
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
  },
  profileDetail: {
    marginTop: 10,
    marginBottom: -10,
  },
  email: {
    color: '#fff',
    fontSize: 15,
    fontFamily: 'open-sans',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#FFF',
    marginTop: 20,
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
  thumbnailDetail: {
    fontFamily: 'open-sans',
    color: Colors.default,
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
