import {
  GET_ALL_RESTAURANTS,
  SIGN_OUT,
  GET_ALL_EVENTS,
  GET_RESTAURANTS_DETAIL,
  CLEAR_RESTAURANTS_DETAIL,
  GET_ALL_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from '../actions/types';

const initialState = {
  restaurantList: [],
  bookmarkList: [],
  eventList: {},
  restaurantDetail: null,
};

const serviceReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_RESTAURANTS:
      return { ...state, restaurantList: [...payload] };

    case GET_ALL_EVENTS:
      return { ...state, eventList: payload };

    case GET_RESTAURANTS_DETAIL:
      return { ...state, restaurantDetail: payload };

    case CLEAR_RESTAURANTS_DETAIL:
      return { ...state, restaurantDetail: null };

    case GET_ALL_BOOKMARKS:
      return { ...state, bookmarkList: [...payload] };

    case ADD_BOOKMARK:
      return { ...state, bookmarkList: [...state.bookmarkList, payload] };

    case REMOVE_BOOKMARK:
      const updatedBookmarks = state.bookmarkList.filter(
        item => item !== payload
      );
      return { ...state, bookmarkList: [...updatedBookmarks] };

    case SIGN_OUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default serviceReducer;
