import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [borderColor, setBorderColor] = useState(null);

  const handleFocus = (value) => {
    setBorderColor(value);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setBorderColor(null);
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.text}>Login with Email and Password</Text>

        <View
          style={{
            ...styles.section,
            borderColor: borderColor === 'email' ? '#3465d9' : 'gray',
          }}>
          <TextInput
            placeholder='Email'
            style={{
              ...styles.textInput,
              color: borderColor === 'email' ? '#3465d9' : 'gray',
            }}
            onFocus={() => handleFocus('email')}
          />
        </View>

        <View
          style={{
            ...styles.section,
            borderColor: borderColor === 'password' ? '#3465d9' : 'gray',
          }}>
          <TextInput
            placeholder='Password'
            style={{
              ...styles.textInput,
              color: borderColor === 'password' ? '#3465d9' : 'gray',
            }}
            secureTextEntry
            onFocus={() => handleFocus('password')}
          />
        </View>

        <TouchableOpacity>
          <Text style={styles.forgot}>For</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.link}>
          <Text style={styles.linkText}>Don't have your account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text style={{ ...styles.linkText, fontFamily: 'open-sans-bold' }}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 30,
    paddingVertical: 100,
  },
  title: {
    color: '#3465d9',
    fontSize: 30,
    fontFamily: 'open-sans-bold',
  },
  text: {
    color: 'gray',
  },
  section: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
  },
  forgot: {
    textAlign: 'right',
    marginTop: 15,
    color: '#3465d9',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'open-sans-bold',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#3465d9',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    borderRadius: 50,
  },
  link: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  linkText: {
    textAlign: 'center',
    fontFamily: 'open-sans',
    color: 'gray',
  },
});

export default LoginScreen;
