import {
  GET_ALL_RESTAURANTS,
  SIGN_OUT,
  GET_RESTAURANTS_DETAIL,
  CLEAR_RESTAURANTS_DETAIL,
} from '../actions/types';

const initialState = {
  restaurantList: [],
  eventList: [],
  restaurantDetail: null,
};

const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RESTAURANTS:
      return { ...state, restaurantList: [...payload] };

    case GET_RESTAURANTS_DETAIL:
      return { ...state, restaurantDetail: payload };

    case CLEAR_RESTAURANTS_DETAIL:
      return { ...state, restaurantDetail: null };
    case SIGN_OUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default serviceReducer;
