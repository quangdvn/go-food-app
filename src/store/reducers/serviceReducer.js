import {
  GET_ALL_RESTAURANTS,
  SIGN_OUT,
  GET_ALL_EVENTS,
} from '../actions/types';

const initialState = {
  restaurantList: [],
  eventList: [],
};

const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RESTAURANTS:
      return { ...state, restaurantList: [...payload] };
    case GET_ALL_EVENTS:
      return { ...state, eventList: [...payload] };
    case SIGN_OUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default serviceReducer;
