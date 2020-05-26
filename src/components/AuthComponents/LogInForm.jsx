import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
  Keyboard,
} from 'react-native';
import { Formik } from 'formik';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';
import * as yup from 'yup';

const initialState = {
  email: '',
  password: '',
};

const logInSchema = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .trim()
    .min(5, 'At least 5 characters required')
    .max(255, 'At most 255 characters required')
    .email('Please enter a valid email')
    .required('Please enter a registered email'),
  password: yup
    .string()
    .label('Password')
    .trim()
    .min(5, 'At least 5 characters required')
    .max(255, 'At most 255 characters required')
    .required('Please enter a valid password'),
});

const LogInForm = ({ handleSubmit, borderColor, handleFocus, spinner }) => {
  return (
    <Formik
      initialValues={initialState}
      onSubmit={(values, action) => {
        Keyboard.dismiss();
        handleSubmit(values);
        action.resetForm();
      }}
      validationSchema={logInSchema}
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
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="off"
            autoCorrect={false}
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
            placeholder="Password"
            autoCapitalize="none"
            autoCompleteType="off"
            onFocus={() => handleFocus('password')}
            secureTextEntry
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
                <Text style={styles.buttonText}>Login</Text>
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

export default LogInForm;
