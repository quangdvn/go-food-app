import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import AppLogo from '../../components/Icon/AppLogo';
import { useSelector, useDispatch } from 'react-redux';
import LogInForm from '../../components/AuthComponents/LogInForm';
import { logIn, clearErrorMessage } from '../../store/actions';

const KEYBOARD_VERTICAL_OFFSET = 0;

const LoginScreen = ({ navigation }) => {
  const [borderColor, setBorderColor] = useState(null);

  const [isLoading, setLoading] = useState(false);

  const { error } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleFocus = value => {
    setBorderColor(value);
  };

  const handleLogIn = async logInData => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
    await dispatch(logIn(logInData));
  };

  useEffect(() => {
    if (error) {
      Alert.alert('Error occured', error, [
        { text: 'OK', style: 'destructive' },
      ]);
    }
    dispatch(clearErrorMessage());
  }, [error]);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setBorderColor(null);
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={false}
        >
          <SafeAreaView style={styles.container}>
            <View>
              <AppLogo />
            </View>
            <Text style={styles.title}>Reservation Made Easy</Text>
            <LogInForm
              handleSubmit={handleLogIn}
              borderColor={borderColor}
              handleFocus={handleFocus}
              spinner={isLoading}
            />
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot your password?</Text>
            </TouchableOpacity>
            <View style={styles.link}>
              <Text style={styles.linkText}>Don't have your account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                <Text
                  style={{ ...styles.linkText, fontFamily: 'open-sans-bold' }}
                >
                  {' '}
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 23 * 3,
    marginTop: 100,
  },
  title: {
    color: '#8cc631',
    fontSize: 16,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    marginVertical: 50,
  },
  forgot: {
    marginTop: 15,
    color: '#8996a6',
    textAlign: 'center',
    fontFamily: 'open-sans',
  },
  loading: {
    marginTop: 40,
  },
  link: {
    flexDirection: 'row',
    marginTop: 220,
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'open-sans',
    color: '#8996a6',
  },
});

export default LoginScreen;
