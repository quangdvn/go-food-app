import axios from 'axios';
import { AsyncStorage } from 'react-native';

export const goFoodApi = axios.create({
  baseURL: 'https://quangdvn-go-food.herokuapp.com/api',
});

export const postInfo = async userInfo => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) return null;
    const reqConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await goFoodApi.post('/auth/info', userInfo, reqConfig);
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllBussiness = async () => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) return null;
    const reqConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await goFoodApi.get('/business/', reqConfig);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getAutoComplete = async searchTerm => {
  try {
    const token = await AsyncStorage.getItem('token');
    if (!token) return null;
    const reqConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const { data } = await goFoodApi.get(
      `/business/autocomplete/${searchTerm}`,
      reqConfig
    );

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
