import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  CLEAR_ERROR_MESSAGE,
  SIGN_OUT,
  GET_INFO,
  LOADING_USER,
  GET_ALL_BOOKMARKS,
  UPDATE_INFO_SUCCESS,
  UPDATE_INFO_FAILED,
  CLEAR_RESTAURANTS_DETAIL,
  GET_ALL_REACTED_EVENTS,
} from './types';
import { AsyncStorage } from 'react-native';
import { navigateTo } from '../../navigationRef';
import { goFoodApi } from '../../api/goFoodApi';
import { reqConfig } from '../../utils/requestConfig';
import { colors } from 'react-native-elements';

const loadingUser = () => {
  return { type: LOADING_USER };
};

export const getUser = () => async (dispatch, getState) => {
  dispatch(loadingUser());

  try {
    const { data } = await goFoodApi.get('/auth/me', reqConfig(getState));

    dispatch({ type: GET_INFO, payload: data.data });

    dispatch({
      type: GET_ALL_BOOKMARKS,
      payload: data.data.bookmarkPlaces,
    });

    dispatch({
      type: GET_ALL_REACTED_EVENTS,
      payload: data.data.reactedEvents,
    });

    navigateTo('Restaurant');
  } catch (err) {
    console.log(err.message);
  }
};

export const updateInfo = data => async (dispatch, getState) => {
  try {
    const result = await goFoodApi.put(
      '/auth/update',
      data,
      reqConfig(getState)
    );
    if (result.data.success) {
      dispatch({ type: UPDATE_INFO_SUCCESS });
    } else {
      dispatch({ type: UPDATE_INFO_FAILED });
    }
  } catch (error) {
    console.log(error);
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
    await AsyncStorage.removeItem('pushToken');
    dispatch({ type: SIGN_OUT });

    navigateTo('LogIn');
  } catch (err) {
    console.log(err);
  }
};

export const clearErrorMessage = () => dispatch => {
  dispatch({ type: CLEAR_ERROR_MESSAGE });
};
