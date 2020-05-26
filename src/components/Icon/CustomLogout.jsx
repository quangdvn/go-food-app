import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/actions';

const CustomLogout = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(signOut());
  };

  return (
    <TouchableOpacity onPress={() => handleClick()}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="logout" size={24} color="gray" />
        <Text style={styles.text}>Log Out</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 5,
  },
  text: {
    paddingLeft: 33,
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: Colors.default,
  },
});

export default CustomLogout;
