import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import * as yup from 'yup';
import { Formik } from 'formik';
import DatePicker from 'react-native-datepicker';

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const InputFormSchema = yup.object().shape({
  email: yup
    .string()
    .label('email')
    .trim()
    .email('Please enter a valid email')
    .required('Please enter this field'),
  username: yup
    .string()
    .label('username')
    .min(5, 'At least 5 characters required')
    .max(255, 'At most 255 characters required')
    .required('Please enter this field'),
  phone: yup
    .string()
    .label('phone')
    .matches(phoneRegExp, 'Phone number is not valid')
    .required('Please enter this field'),
});

const AccountInfoForm = ({ handleSubmit }) => {
  const initialState = {
    email: '',
    username: '',
    phone: '',
    gender: '',
    birthday: '',
  };
  const [birthday, setBirthday] = useState(initialState.birthday);
  const [gender, setGender] = useState(initialState.gender);
  return (
    <Formik
      onSubmit={(value, action) => {
        handleSubmit({ ...value, gender, birthday });
      }}
      initialValues={initialState}
      validationSchema={InputFormSchema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        isValid,
      }) => (
        <View style={styles.form}>
          <View>
            <View style={styles.input}>
              <AntDesign name="user" size={24} color="black" />
              <View style={styles.labelInput}>
                <Text style={styles.label}>Username</Text>
                <TextInput
                  onChangeText={handleChange('username')}
                  value={values.username}
                  style={styles.txtInput}
                />
                <Text style={styles.error}>
                  {touched.username && errors.username}
                </Text>
              </View>
            </View>
            <View style={styles.input}>
              <AntDesign name="mail" size={24} color="black" />
              <View style={styles.labelInput}>
                <Text style={styles.label}>Email</Text>
                <TextInput
                  onChangeText={handleChange('email')}
                  value={values.email}
                  style={styles.txtInput}
                />
                <Text style={styles.error}>
                  {touched.email && errors.email}
                </Text>
              </View>
            </View>
            <View style={styles.input}>
              <AntDesign name="phone" size={24} color="black" />
              <View style={styles.labelInput}>
                <Text style={styles.label}>Phone Number</Text>
                <TextInput
                  onChangeText={handleChange('phone')}
                  value={values.phone}
                  style={styles.txtInput}
                />
                <Text style={styles.error}>
                  {touched.phone && errors.phone}
                </Text>
              </View>
            </View>
            <View style={styles.input}>
              <AntDesign name="calendar" size={24} color="black" />
              <View style={styles.labelInput}>
                <Text style={styles.label}>Birthday</Text>
                <DatePicker
                  format="YYYY-MM-DD"
                  mode="date"
                  date={birthday}
                  onDateChange={date => setBirthday(date)}
                />
              </View>
            </View>
            <View style={styles.input}>
              <FontAwesome name="transgender" size={24} color="black" />
              <View style={styles.labelInput}>
                <Text style={styles.label}>Gender</Text>
                <RadioForm
                  style={{ marginTop: 15 }}
                  radio_props={[
                    { label: 'male  ', value: 0 },
                    { label: 'female', value: 1 },
                  ]}
                  initial={gender}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={'#000'}
                  borderWidth={0.5}
                  buttonSize={15}
                  buttonOuterSize={25}
                  onPress={value => {
                    setGender(value);
                  }}
                />
              </View>
            </View>
          </View>
          <Button onPress={handleSubmit} disabled={!isValid} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
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

export default AccountInfoForm;
