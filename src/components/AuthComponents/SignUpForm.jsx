import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ActivityIndicator,
} from 'react-native';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import * as yup from 'yup';

const initialState = {
  email: '',
  fullname: '',
  password: '',
  rePassword: '',
};

const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .trim()
    .min(5, 'At least 5 characters required')
    .max(255, 'At most 255 characters required')
    .email('Please enter a valid email')
    .required('Please enter a new email'),
  fullname: yup
    .string()
    .label('Full name')
    .trim()
    .min(5, 'At least 5 characters required')
    .max(50, 'At most 50 characters required')
    .required('Please enter your name'),
  password: yup
    .string()
    .label('Password')
    .min(5, 'At least 5 characters required')
    .max(255, 'At most 255 characters required')
    .required('Please enter a valid password'),
  rePassword: yup
    .string()
    .label('Confirm Password')
    .required('Please enter a valid password')
    .oneOf([yup.ref('password'), null], 'Password do not match'),
});

const SignUpForm = ({ handleSubmit, borderColor, handleFocus, spinner }) => {
  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, action) => {
        Keyboard.dismiss();
        handleSubmit(values);
        action.resetForm();
      }}
      validationSchema={signUpSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        isValid,
        errors,
        touched,
      }) => (
        <View>
          <TextInput
            placeholder="Enter email"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
            style={styles.textInput}
            onFocus={() => handleFocus('email')}
            onChangeText={handleChange('email')}
            value={values.email}
            onBlur={handleBlur('email')}
            style={{
              ...styles.input,
              borderColor: borderColor === 'email' ? '#39B54A' : '#ddd',
              color: borderColor === 'email' ? '#39B54A' : 'gray',
            }}
          />

          <Text style={styles.error}>{touched.email && errors.email}</Text>

          <TextInput
            placeholder="Enter your name"
            style={styles.textInput}
            onFocus={() => handleFocus('fullname')}
            onChangeText={handleChange('fullname')}
            value={values.fullname}
            onBlur={handleBlur('fullname')}
            style={{
              ...styles.input,
              borderColor: borderColor === 'fullname' ? '#39B54A' : '#ddd',
              color: borderColor === 'fullname' ? '#39B54A' : 'gray',
            }}
          />

          <Text style={styles.error}>
            {touched.fullname && errors.fullname}
          </Text>

          <TextInput
            placeholder="Enter password"
            style={styles.textInput}
            secureTextEntry
            onFocus={() => handleFocus('password')}
            onChangeText={handleChange('password')}
            value={values.password}
            onBlur={handleBlur('password')}
            style={{
              ...styles.input,
              borderColor: borderColor === 'password' ? '#39B54A' : '#ddd',
              color: borderColor === 'password' ? '#39B54A' : 'gray',
            }}
          />

          <Text style={styles.error}>
            {touched.password && errors.password}
          </Text>

          <TextInput
            placeholder="Confirm password"
            style={styles.textInput}
            secureTextEntry
            onFocus={() => handleFocus('rePassword')}
            onChangeText={handleChange('rePassword')}
            value={values.rePassword}
            onBlur={handleBlur('rePassword')}
            style={{
              ...styles.input,
              borderColor: borderColor === 'rePassword' ? '#39B54A' : '#ddd',
              color: borderColor === 'rePassword' ? '#39B54A' : 'gray',
            }}
          />

          <Text style={styles.error}>
            {touched.rePassword && errors.rePassword}
          </Text>

          <LinearGradient
            colors={Colors.gradient}
            start={[1.5, 0]}
            end={[0, 0.5]}
            style={
              isValid
                ? styles.button
                : {
                    ...styles.button,
                    opacity: 0.7,
                  }
            }
          >
            <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
              {spinner ? (
                <ActivityIndicator
                  style={styles.spinner}
                  size="small"
                  color="white"
                />
              ) : (
                <Text style={styles.buttonText}>Sign Up</Text>
              )}
            </TouchableOpacity>
          </LinearGradient>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    height: 50,
    padding: 10,
    marginVertical: 10,
    marginHorizontal: 30,
    fontSize: 14,
    borderRadius: 6,
  },
  spinner: {
    paddingTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
  },
  button: {
    height: 40,
    backgroundColor: '#009245',
    borderRadius: 20,
    marginHorizontal: 15,
    marginTop: 20,
  },
  loading: {
    marginTop: 40,
  },
  error: {
    color: 'crimson',
    fontFamily: 'open-sans',
    marginHorizontal: 30,
    textAlign: 'left',
  },
});

export default SignUpForm;
