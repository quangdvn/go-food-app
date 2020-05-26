import { GET_ALL_RESTAURANTS } from './types';
import { AsyncStorage } from 'react-native';
import { navigateTo } from '../../navigationRef';
import { goFoodApi } from '../../api/goFoodApi';
import { reqConfig } from '../../utils/requestConfig';

export const getAllRestaurants = () => async (dispatch, getState) => {
  try {
    const { data } = await goFoodApi.get('/business/', reqConfig(getState));

    dispatch({ type: GET_ALL_RESTAURANTS, payload: data.data });
  } catch (err) {
    console.log(err.message);
  }
};
