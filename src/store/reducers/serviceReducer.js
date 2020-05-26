import { GET_ALL_RESTAURANTS, SIGN_OUT } from '../actions/types';

const initialState = {
  restaurantList: [],
  eventList: [],
};

const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RESTAURANTS:
      return { ...state, restaurantList: [...payload] };

    case SIGN_OUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default serviceReducer;
