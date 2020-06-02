import {
  GET_ALL_RESTAURANTS,
  SIGN_OUT,
  GET_RESTAURANTS_DETAIL,
  CLEAR_RESTAURANTS_DETAIL,
  GET_ALL_BOOKMARKS,
  ADD_BOOKMARK,
  REMOVE_BOOKMARK,
} from '../actions/types';

const initialState = {
  restaurantList: [],
  bookmarkList: [],
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

    case GET_ALL_BOOKMARKS:
      return { ...state, bookmarkList: [...payload] };

    case ADD_BOOKMARK:
      return { ...state, bookmarkList: [...state.bookmarkList, payload] };

    case REMOVE_BOOKMARK:
      const updatedBookmarks = state.bookmarkList.filter(
        item => item !== payload
      );
      return { ...state, bookmarkList: [...updatedBookmarks] };

    // case TOGGLE_BOOKMARK:
    //   const existingIndex = state.user.bookmarks.findIndex(
    //     item => item.restaurantId === payload
    //   );
    //   if (existingIndex >= 0) {
    //     const updatedBookmarks = [...state.user.bookmarks];
    //     updatedBookmarks.splice(existingIndex, 1);
    //     return {
    //       ...state,
    //       user: { ...state.user, bookmarks: updatedBookmarks },
    //     };
    //   } else {
    //     const updatedFavMeal = state.meals.find(meal => meal.id === payload);
    //     return {
    //       ...state,
    //       favoriteMeals: state.favoriteMeals.concat(updatedFavMeal),
    //     };
    //   }

    case SIGN_OUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default serviceReducer;
