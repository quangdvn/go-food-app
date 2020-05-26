import React from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import countryData from '../../data/country.json';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const CountryQuestion = ({
  getCities,
  countryButton,
  country,
  setCountryData,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Can you tell me where are you from?</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <Picker
          selectedValue={country}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setCountryData(itemValue)}
        >
          <Picker.Item
            label="No Selection"
            value={null}
            itemStyle={styles.pickerItem}
          />
          {countryData.map((item, index) => {
            return (
              <Picker.Item key={index} label={item.name} value={item.code} />
            );
          })}
        </Picker>
      </View>

      <View style={styles.confirm}>
        <LinearGradient
          colors={Colors.gradient}
          start={[1.5, 0]}
          end={[0, 0.5]}
          style={styles.button}
        >
          <TouchableOpacity
            onPress={() => {
              getCities(country);
            }}
            style={country === null || countryButton ? { opacity: 0.5 } : null}
            disabled={country === null || countryButton}
          >
            <Text style={styles.buttonText}>OK</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: Colors.accent,
  },
  pickerItem: {
    color: Colors.accent,
    borderColor: 'red',
    borderWidth: 4,
  },
  confirm: {
    marginTop: 150,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    height: 40,
    width: 90,
    borderRadius: 20,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'open-sans-bold',
    textAlign: 'center',
    marginVertical: 7,
  },
});

export default CountryQuestion;
