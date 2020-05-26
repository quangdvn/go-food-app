import React from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const CityQuestion = ({ city, confirmCity, cityList, setData, cityButton }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ok, Which city?</Text>

      <View style={styles.picker}>
        <Picker
          selectedValue={city}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => setData(itemValue)}
        >
          <Picker.Item label="No Selection" value={null} />
          {cityList.map((item, index) => {
            return <Picker.Item key={index} label={item} value={item} />;
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
              confirmCity();
            }}
            style={city === null || cityButton ? { opacity: 0.5 } : null}
            disabled={city === null || cityButton}
          >
            <Text style={styles.buttonText}>Got it</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 20,
    fontFamily: 'open-sans-bold',
    color: Colors.accent,
  },
  picker: {
    flexDirection: 'row',
    justifyContent: 'center',
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

export default CityQuestion;
