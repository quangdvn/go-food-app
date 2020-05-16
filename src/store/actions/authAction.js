import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  CLEAR_ERROR_MESSAGE,
} from './types';
import { AsyncStorage } from 'react-native';
import { navigateTo } from '../../navigationRef';
import goFoodApi from '../../api/goFoodApi';

export const logIn = logInData => async dispatch => {
  try {
    const { data } = await goFoodApi.post('/auth/login', logInData);
    dispatch({ type: 'LOG_IN_SUCCESS', payload: data.token });
    navigateTo('MainStack');
  } catch (err) {
    if (err.response.status === 400) {
      dispatch({
        type: LOG_IN_ERROR,
        payload: err.response.data.error,
      });
    } else {
      dispatch({
        type: LOG_IN_ERROR,
        payload: 'Something went wrong ..',
      });
    }
  }
};

export const signUp = signUpData => async dispatch => {
  try {
    const { data } = await goFoodApi.post('/auth/signup', signUpData);
    navigateTo('MainStack');
  } catch (err) {
    if (err.response.status === 400) {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: err.response.data.error,
      });
    } else {
      dispatch({
        type: SIGN_UP_ERROR,
        payload: 'Something went wrong ..',
      });
    }
  }
};

export const clearErrorMessage = () => dispatch => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};
