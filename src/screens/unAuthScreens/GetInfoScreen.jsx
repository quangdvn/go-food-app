import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  Button,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
} from 'react-native';
import countryData from '../../data/country.json';
import goFoodApi from '../../api/goFoodApi';

const GetInfoScreen = () => {
  const [country, setCountry] = useState(null);

  const [countryButton, setCountryButton] = useState(false);

  const [cityList, setCityList] = useState(null);

  const [city, setCity] = useState(null);

  const [cityButton, setCityButton] = useState(false);

  const [favoriteFood, setFavoriteFood] = useState(null);

  const [showFavorite, setShowFavorite] = useState(false);

  const getCountryName = code => {
    let returnData = null;
    countryData.forEach(item => {
      if (item.code === code) {
        returnData = item.name;
      }
    });
    return returnData;
  };

  const getFavoriteFood = term => {
    let favoriteList = term.trim().split(/[\s,]+/g);
    return favoriteList[0];
  };

  const getCities = async code => {
    try {
      const {
        data: {
          data: { cities },
        },
      } = await goFoodApi.get(`/geo/name/${code}`);
      setCityList(cities);
      setCountryButton(true);
    } catch (err) {
      console.log(err.message);
    }
  };

  const getLatLng = async city => {
    try {
      const {
        data: {
          data: { latitude, longitude },
        },
      } = await goFoodApi.get(`/geo/code/${city}`);
      return { latitude, longitude };
    } catch (err) {
      console.log(err.message);
    }
  };

  const confirmCity = () => {
    setShowFavorite(true);
    setCityButton(true);
  };

  const getData = async () => {
    const { latitude, longitude } = await getLatLng(city);
    const countryName = await getCountryName(country);
    const userInfo = {
      address: {
        country: countryName,
        city,
        latitude,
        longitude,
      },
      favoriteFood: getFavoriteFood(favoriteFood),
    };
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.inner}>
            <View>
              <Picker
                selectedValue={country}
                style={{ height: 50, width: 150 }}
                onValueChange={(itemValue, itemIndex) => setCountry(itemValue)}
              >
                <Picker.Item label="No Selection" value={null} />
                {countryData.map((item, index) => {
                  return (
                    <Picker.Item
                      key={index}
                      label={item.name}
                      value={item.code}
                    />
                  );
                })}
              </Picker>

              <View style={{ marginTop: 150 }}>
                <Button
                  title="Confirm Country"
                  onPress={() => getCities(country)}
                  disabled={country === null || countryButton}
                />
              </View>
            </View>

            {cityList ? (
              <View>
                <Picker
                  selectedValue={city}
                  style={{ height: 50, width: 200 }}
                  onValueChange={(itemValue, itemIndex) => setCity(itemValue)}
                >
                  <Picker.Item label="No Selection" value={null} />
                  {cityList.map((item, index) => {
                    return (
                      <Picker.Item key={index} label={item} value={item} />
                    );
                  })}
                </Picker>
                <View style={{ marginTop: 150 }}>
                  <Button
                    title="Confirm City"
                    onPress={() => confirmCity()}
                    disabled={city === null || cityButton}
                  />
                </View>
              </View>
            ) : null}

            {showFavorite ? (
              <View>
                <View style={{ marginTop: 20 }}>
                  <Text>Tell me your favorite food</Text>
                  <TextInput
                    value={favoriteFood}
                    onChangeText={text => setFavoriteFood(text)}
                    style={styles.input}
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Button
                    title="Confirm"
                    onPress={() => getData()}
                    disabled={!favoriteFood}
                  />
                </View>
              </View>
            ) : null}
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inner: {
    flex: 1,
    marginBottom: 50,
    justifyContent: 'space-around',
  },
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
});

export default GetInfoScreen;
