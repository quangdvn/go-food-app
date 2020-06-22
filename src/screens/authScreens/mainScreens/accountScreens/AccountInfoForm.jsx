import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { updateInfo } from '../../../../store/actions/authAction';
import Colors from '../../../../constants/Colors';

const phoneRegExp = /^[0-9]{7,10}$/;

const AccountInfoForm = ({ userInfo }) => {
  const initialState = {
    username: userInfo.fullname,
    email: userInfo.email,
    phone: userInfo.contactNumber || null,
    gender: userInfo.gender || null,
    birthday: userInfo.dob ? new Date(userInfo.dob) : new Date(1598051730000),
  };

  const dispatch = useDispatch();

  const [birthday, setBirthday] = useState(initialState.birthday);
  const [phone, setPhone] = useState(initialState.phone);
  const [gender, setGender] = useState(initialState.gender);
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);
  const [dataChanged, setDataChanged] = useState(false); // check user info has been updated

  useEffect(() => {
    if (
      (initialState.phone !== phone && !error) ||
      (initialState.gender !== gender && !error) ||
      (initialState.birthday.getTime() !== birthday.getTime() && !error)
    ) {
      setDataChanged(true);
    } else {
      setDataChanged(false);
    }

    return () => {
      setDataChanged(false);
    };
  }, [birthday, phone, gender]);

  const onPickerChange = (event, selectedDate) => {
    setShow(false);
    selectedDate = selectedDate || initialState.birthday;
    setBirthday(selectedDate);
  };

  const handlePhoneChange = value => {
    if (!value.match(phoneRegExp) || value === '') {
      setError(true);
    } else {
      setError(false);
      setPhone(value);
    }
  };

  const handleSubmit = () => {
    let gen = gender === 0 ? 'Male' : 'Female';
    const updateData = {
      dob: birthday.toDateString(),
      contactNumber: phone,
      gender: gen,
    };
    dispatch(updateInfo(updateData));
  };

  return (
    <View style={styles.form}>
      <View>
        <View style={styles.input}>
          <AntDesign name="user" size={24} color={Colors.default} />
          <View style={styles.labelInput}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.txtInput}
              defaultValue={initialState.username}
              editable={false}
            />
          </View>
        </View>
        <View style={styles.input}>
          <AntDesign name="mail" size={24} color={Colors.default} />
          <View style={styles.labelInput}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.txtInput}
              defaultValue={initialState.email}
              editable={false}
            />
          </View>
        </View>
        <View style={styles.input}>
          <AntDesign name="phone" size={24} color={Colors.default} />
          <View style={styles.labelInput}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
              style={styles.txtInput}
              defaultValue={phone}
              keyboardType="phone-pad"
              onChangeText={handlePhoneChange}
            />
            {error && (
              <Text style={styles.error}>
                Please correct the value of this field
              </Text>
            )}
          </View>
        </View>
        <View style={styles.input}>
          <AntDesign name="calendar" size={24} color={Colors.default} />
          <View style={styles.labelInput}>
            <Text style={styles.label}>Birthday</Text>
            {show && (
              <DateTimePicker
                value={birthday || initialState.birthday}
                mode="date"
                display="spinner"
                style={{ height: 250 }}
                onChange={onPickerChange}
              />
            )}
            <TouchableOpacity onPress={() => setShow(true)}>
              <Text style={styles.txtInput}>
                {(birthday || initialState.birthday).toDateString()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <FontAwesome name="transgender" size={24} color={Colors.default} />
          <View style={styles.labelInput}>
            <Text style={styles.label}>Gender</Text>
            <RadioForm
              style={{ marginTop: 15 }}
              radio_props={[
                { label: 'Male    ', value: 0 },
                { label: 'Female', value: 1 },
              ]}
              initial={gender === 'Male' ? 0 : 1}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={Colors.default}
              selectedButtonColor={Colors.accent}
              borderWidth={0.5}
              buttonSize={10}
              buttonOuterSize={20}
              animation={true}
              labelStyle={{ color: Colors.default, fontFamily: 'open-sans' }}
              onPress={value => {
                setGender(value);
              }}
            />
          </View>
        </View>
      </View>
      {dataChanged && (
        <Button
          style={styles.btnSubmit}
          onPress={handleSubmit}
          title="Submit"
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'crimson',
    fontFamily: 'open-sans',
  },
  btnSubmit: {
    marginBottom: 20,
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
    color: Colors.default,
    fontFamily: 'open-sans',
  },
  labelInput: {
    marginLeft: 20,
  },
  label: {
    fontSize: 20,
    color: Colors.default,
    fontFamily: 'open-sans-bold',
  },
});

export default AccountInfoForm;
