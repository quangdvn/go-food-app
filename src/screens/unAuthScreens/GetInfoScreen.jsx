import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import countryData from '../../data/country.json';
import { postInfo, goFoodApi } from '../../api/goFoodApi';
import CountryQuestion from '../../components/UnAuthComponents/CountryQuestion';
import CityQuestion from '../../components/UnAuthComponents/CityQuestion';
import FavouriteFoodQuestion from '../../components/UnAuthComponents/FavouriteFoodQuestion';

const KEYBOARD_VERTICAL_OFFSET = Platform.OS === 'ios' ? 120 : 0;

const GetInfoScreen = ({ navigation }) => {
  const [cityList, setCityList] = useState(null);

  const [country, setCountry] = useState(null);

  const [countryButton, setCountryButton] = useState(false);

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
    try {
      await postInfo(userInfo);
      navigation.navigate('DataLoading');
    } catch (err) {
      console.log(err.message);
    }
  };

  const setData = value => {
    setCity(value);
  };

  const setFoodData = value => {
    setFavoriteFood(value);
  };

  const setCountryData = value => {
    setCountry(value);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={KEYBOARD_VERTICAL_OFFSET}
        style={{ flex: 1, marginHorizontal: 15 }}
      >
        <ScrollView>
          <SafeAreaView style={styles.container}>
            <View style={styles.inner}>
              <CountryQuestion
                getCities={getCities}
                countryButton={countryButton}
                country={country}
                setCountryData={setCountryData}
              />
              {cityList ? (
                <CityQuestion
                  cityList={cityList}
                  city={city}
                  confirmCity={confirmCity}
                  setData={setData}
                  cityButton={cityButton}
                />
              ) : null}

              {showFavorite ? (
                <FavouriteFoodQuestion
                  favoriteFood={favoriteFood}
                  getData={getData}
                  setFoodData={setFoodData}
                />
              ) : null}
            </View>
          </SafeAreaView>
        </ScrollView>
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
