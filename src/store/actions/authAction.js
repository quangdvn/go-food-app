import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  CLEAR_ERROR_MESSAGE,
  SIGN_OUT,
  GET_INFO,
  LOADING_USER,
} from './types';
import { AsyncStorage } from 'react-native';
import { navigateTo } from '../../navigationRef';
import { goFoodApi } from '../../api/goFoodApi';

//* Setting token config
const reqConfig = getState => {
  //* Get token from localStorage
  const token = getState().auth.token;
  //* set up headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  //* If token existed, add to headers
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
};

const loadingUser = () => {
  return { type: LOADING_USER };
};

export const getUser = () => async (dispatch, getState) => {
  dispatch(loadingUser());
  try {
    const { data } = await goFoodApi.get('/auth/me', reqConfig(getState));

    dispatch({ type: GET_INFO, payload: data.data });
    navigateTo('Restaurant');
  } catch (err) {
    console.log(err.message);
  }
};

export const logIn = logInData => async dispatch => {
  try {
    const { data } = await goFoodApi.post('/auth/login', logInData);
    await AsyncStorage.setItem('token', data.token);

    dispatch({ type: 'LOG_IN_SUCCESS', payload: data.token });

    navigateTo('DataLoading');
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

export const localSignIn = () => async dispatch => {
  try {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      dispatch({ type: LOG_IN_SUCCESS, payload: token });
      navigateTo('DataLoading');
    } else {
      navigateTo('AuthStack');
    }
  } catch (err) {
    console.log(err);
  }
};

export const signUp = signUpData => async dispatch => {
  try {
    const { data } = await goFoodApi.post('/auth/signup', signUpData);
    await AsyncStorage.setItem('token', data.token);

    dispatch({ type: SIGN_UP_SUCCESS, payload: data.token });

    navigateTo('GetInfo');
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

export const signOut = () => async dispatch => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: SIGN_OUT });

    navigateTo('LogIn');
  } catch (err) {
    console.log(err);
  }
};

export const clearErrorMessage = () => dispatch => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};
