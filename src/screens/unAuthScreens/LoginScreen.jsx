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
  ActivityIndicator,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import { Icon_logo } from '../../components/Icon/Icon';
import { Formik } from 'formik';
import * as yup from 'yup';
import ErrorMessage from '../../components/ErrorMessage';
const LoginScreen = ({ navigation }) => {
  const [borderColor, setBorderColor] = useState(null);

  const handleFocus = value => {
    setBorderColor(value);
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .label('Email')
      .email('Enter a valid email')
      .required('Please enter a registered email'),
    password: yup
      .string()
      .label('Password')
      .required()
      .min(4, 'Enter at least 4 characters '),
  });
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setBorderColor(null);
        Keyboard.dismiss();
      }}
    >
      <View syle={styles.background}>
        <View style={styles.container}>
          <View>
            <Icon_logo />
          </View>
          <Text style={styles.title}>Reservation Made Easy</Text>

          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={values => console.log(values)}
            validationSchema={validationSchema}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
              isSubmitting,
            }) => (
              <View>
                <View style={styles.section}>
                  <TextInput
                    placeholder="Email"
                    style={styles.textInput}
                    // onFocus={() => handleFocus('email')}
                    onChangeText={handleChange('email')}
                    value={values.email}
                    onBlur={handleBlur('email')}
                  />

                  <Text style={styles.error}>
                    {touched.email && errors.email}
                  </Text>
                </View>

                <View style={styles.section}>
                  <TextInput
                    placeholder="Password"
                    style={styles.textInput}
                    secureTextEntry
                    // onFocus={() => handleFocus('password')}
                    onChangeText={handleChange('password')}
                    value={values.password}
                    onBlur={handleBlur('password')}
                  />
                  <Text style={styles.error}>
                    {touched.password && errors.password}
                  </Text>
                </View>
                {/* show loading when is submiting */}
                {/* <View style={styles.loading}>
                  <ActivityIndicator size="small" color="#8996a6" />
                </View> */}
                <LinearGradient
                  colors={Colors.gradient}
                  start={[1.5, 0]}
                  end={[0, 0.5]}
                  style={
                    isValid
                      ? styles.button
                      : {
                          ...styles.button,
                          opacity: 0.5,
                        }
                  }
                >
                  <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                    <Text style={styles.buttonText}>Login</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            )}
          </Formik>

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
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    marginHorizontal: 23 * 3,
    marginTop: 100,
  },
  title: {
    color: '#8cc631',
    fontSize: 4.7 * 3,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    paddingTop: 30,
  },
  text: {
    color: 'gray',
  },
  section: {
    borderWidth: 1.5,
    borderRadius: 1.3 * 3,
    marginHorizontal: 7.5 * 3,
    height: 11 * 3,
    marginTop: 20,
    borderColor: '#e1e5e9',
  },
  textInput: {
    paddingVertical: 3,
    paddingLeft: 7,
  },
  forgot: {
    marginTop: 15,
    color: '#8996a6',
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    paddingVertical: 2,
  },
  button: {
    height: 30,
    backgroundColor: '#009245',
    borderRadius: 5 * 3,
    marginHorizontal: 10,
    marginTop: 40,
  },
  loading: {
    marginTop: 40,
  },
  link: {
    flexDirection: 'row',
    marginTop: 75,
    justifyContent: 'center',
  },
  linkText: {
    fontFamily: 'open-sans',
    color: '#8996a6',
  },
  error: { color: 'red', fontSize: 12, marginTop: 9 },
});

export default LoginScreen;
