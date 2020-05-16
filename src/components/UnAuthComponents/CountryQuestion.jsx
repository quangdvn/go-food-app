import React, { useState } from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import countryData from '../../data/country.json';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const CountryQuestion = ({ getCities, countryButton, country, setCountryData }) => {
  return (
    <View style={{ marginTop: 15 }}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'open-sans-bold',
          color: '#8CC631',
        }}
      >
        Can you tell me where are you from?
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Picker
          selectedValue={country}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setCountryData(itemValue)}
        >
          <Picker.Item
            label="No Selection"
            value={null}
            itemStyle={{
              color: '#8CC631',
              borderColor: 'red',
              borderWidth: 4,
            }}
          />
          {countryData.map((item, index) => {
            return (
              <Picker.Item key={index} label={item.name} value={item.code} />
            );
          })}
        </Picker>
      </View>

      <View
        style={{
          marginTop: 150,
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <LinearGradient
          colors={Colors.gradient}
          start={[1.5, 0]}
          end={[0, 0.5]}
          style={{
            height: 40,
            width: 90,
            borderRadius: 20,
            // marginHorizontal: 15,
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              getCities(country);
            }}
            disabled={country === null || countryButton}
          >
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontFamily: 'open-sans-bold',
                textAlign: 'center',
                marginVertical: 7,
              }}
            >
              OK
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

export default CountryQuestion;
