import {
  GET_ALL_RESTAURANTS,
  GET_RESTAURANTS_DETAIL,
  CLEAR_RESTAURANTS_DETAIL,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
  GET_ALL_EVENTS,
  REACT_EVENT,
} from './types';
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

export const getAllEvents = () => async (dispatch, getState) => {
  try {
    const { data } = await goFoodApi.get('/event', reqConfig(getState));
    dispatch({ type: GET_ALL_EVENTS, payload: data.data });
  } catch (error) {
    console.log(error.message);
  }
};

export const getRestaurantDetail = id => async dispatch => {
  try {
    const { data } = await goFoodApi.get(`/business/${id}`);

    dispatch({ type: GET_RESTAURANTS_DETAIL, payload: data.data });
  } catch (err) {
    console.log(err.message);
  }
};

export const clearRestaurantsDetail = () => dispatch => {
  dispatch({ type: CLEAR_RESTAURANTS_DETAIL });
};

export const addBookmark = (id, sendData) => async (dispatch, getState) => {
  try {
    await goFoodApi.put(
      `/business/${id}/bookmark`,
      sendData,
      reqConfig(getState)
    );

    dispatch({ type: ADD_BOOKMARK, payload: id });
  } catch (err) {
    console.log(err.message);
  }
};

export const removeBookmark = id => async (dispatch, getState) => {
  try {
    await goFoodApi.delete(`/business/${id}/bookmark`, reqConfig(getState));

    dispatch({ type: REMOVE_BOOKMARK, payload: id });
  } catch (err) {
    console.log(err.message);
  }
};

export const markInterested = (id, sendData) => async (dispatch, getState) => {
  try {
    await goFoodApi.put(
      `/event/${id}/interested`,
      sendData,
      reqConfig(getState)
    );

    dispatch({ type: REACT_EVENT, payload: id });
  } catch (err) {
    console.log(err.message);
  }
};

export const markUninterested = id => async (dispatch, getState) => {
  try {
    await goFoodApi.put(`/event/${id}/uninterested`, {}, reqConfig(getState));

    dispatch({ type: REACT_EVENT, payload: id });
  } catch (err) {
    console.log(err.message);
  }
};
