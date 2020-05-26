import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
} from 'react-native';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {
  Icon_bookmark,
  Icon_contact,
  Icon_map,
  Icon_web,
} from '../../../components/Icon/TestLogo';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../../../assets/images/drawer_header.png')}
        style={styles.backgroundImg}
      >
        <View style={styles.containerProfile}>
          <Image
            source={require('../../../../assets/images/test.png')}
            style={styles.avatar}
          />
          <Text style={styles.name}>James Jackson</Text>
          <Text style={styles.email}>jamesjackson@io.com</Text>
        </View>
      </ImageBackground>
      <View style={styles.thumbnails}>
        <View style={styles.thumbnailsIcon}>
          <Icon_bookmark />
          <Text>2 like(s)</Text>
        </View>
        <View style={styles.thumbnailsIcon}>
          <Icon_bookmark />
          <Text>3 eat out(s)</Text>
        </View>
        <View style={styles.thumbnailsIcon}>
          <Icon_bookmark />
          <Text>1 bookmark(s)</Text>
        </View>
      </View>
      <View style={styles.form}>
        <View>
          <View style={styles.input}>
            <Icon_contact />
            <View style={styles.labelInput}>
              <Text style={styles.label}>Username</Text>
              <TextInput style={styles.txtInput} />
            </View>
          </View>
          <View style={styles.input}>
            <Icon_map />
            <View style={styles.labelInput}>
              <Text style={styles.label}>Email</Text>
              <TextInput style={styles.txtInput} />
            </View>
          </View>
          <View style={styles.input}>
            <Icon_contact />
            <View style={styles.labelInput}>
              <Text style={styles.label}>Phone Number</Text>
              <TextInput style={styles.txtInput} />
            </View>
          </View>
          <View style={styles.input}>
            <Icon_web />
            <View style={styles.labelInput}>
              <Text style={styles.label}>Birthday</Text>
              <TextInput style={styles.txtInput} />
            </View>
          </View>
          <View style={styles.input}>
            <Icon_bookmark />
            <View style={styles.labelInput}>
              <Text style={styles.label}>Gender</Text>
              <RadioForm
                style={{ marginTop: 15 }}
                radio_props={[
                  { label: 'male  ', value: 0 },
                  { label: 'female', value: 1 },
                ]}
                initial={0}
                formHorizontal={true}
                labelHorizontal={true}
                buttonColor={'#000'}
                borderWidth={0.5}
                buttonSize={15}
                buttonOuterSize={25}
                onPress={value => {}}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
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
  form: {
    width: '100%',
    marginTop: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 20,
  },
  txtInput: {
    borderBottomColor: '#44566c',
    borderBottomWidth: 1,
    width: 240,
  },
  labelInput: {
    marginLeft: 20,
  },
  label: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
  },
});

export default AccountScreen;
