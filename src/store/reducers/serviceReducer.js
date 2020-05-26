import { GET_ALL_RESTAURANTS } from '../actions/types';

const initialState = {
  restaurantList: [],
  eventList: [],
};

const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RESTAURANTS:
      return { ...state, restaurantList: [...payload] };

    default:
      return state;
  }
};

export default serviceReducer;
