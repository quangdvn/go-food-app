import React from 'react';
import { View, Text, StyleSheet, Picker, TouchableOpacity } from 'react-native';
import countryData from '../../data/country.json';
import { LinearGradient } from 'expo-linear-gradient';
import Colors from '../../constants/Colors';

const CityQuestion = ({ city, confirmCity, cityList, setData, cityButton }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: 'open-sans-bold',
          color: '#8CC631',
        }}
      >
        Ok, Which city?
      </Text>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
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
              confirmCity();
            }}
            disabled={city === null || cityButton}
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

const styles = StyleSheet.create({
  container: {},
});

export default CityQuestion;
