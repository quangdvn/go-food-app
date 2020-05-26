import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  Alert,
  Platform,
  ScrollView,
} from 'react-native';
import AppLogo from '../../components/Icon/AppLogo';
import { useSelector, useDispatch } from 'react-redux';
import SignUpForm from '../../components/AuthComponents/SignUpForm';
import { signUp, clearErrorMessage } from '../../store/actions';

const KEYBOARD_VERTICAL_OFFSET = 0;

const SignUpScreen = ({ navigation }) => {
  const [borderColor, setBorderColor] = useState(null);

  const [isLoading, setLoading] = useState(false);

  const { error } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const handleFocus = value => {
    setBorderColor(value);
  };

  const handleSignUp = async signUpData => {
    setLoading(true);
    setTimeout(() => setLoading(false), 500);
    await dispatch(signUp(signUpData));
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
            <View style={styles.inner}>
              <View>
                <AppLogo />
              </View>
              <Text style={styles.title}>Reservation Made Easy</Text>
              <SignUpForm
                handleSubmit={handleSignUp}
                borderColor={borderColor}
                handleFocus={handleFocus}
                spinner={isLoading}
              />
              <View style={styles.link}>
                <Text style={styles.linkText}>Already have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('LogIn')}>
                  <Text
                    style={{ ...styles.linkText, fontFamily: 'open-sans-bold' }}
                  >
                    {' '}
                    Log In
                  </Text>
                </TouchableOpacity>
              </View>
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
  inner: {
    flex: 1,
    marginBottom: 30,
    justifyContent: 'flex-end',
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
    marginBottom: -5,
    marginTop: 75,
    justifyContent: 'center',
  },
  linkText: {
    fontSize: 16,
    fontFamily: 'open-sans',
    color: '#8996a6',
  },
});

export default SignUpScreen;
