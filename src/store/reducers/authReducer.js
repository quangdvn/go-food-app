import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  CLEAR_ERROR_MESSAGE,
  SIGN_OUT,
  GET_INFO,
  LOADING_USER,
} from '../actions/types';

const initialState = {
  user: {},
  token: null,
  error: '',
  isLoading: false,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOG_IN_SUCCESS:
      return { ...state, error: '', token: payload };

    case LOG_IN_ERROR:
      return { ...state, error: payload };

    case SIGN_UP_SUCCESS:
      return { ...state, error: '', token: payload };

    case SIGN_UP_ERROR:
      return { ...state, error: payload };

    case GET_INFO:
      return { ...state, user: { ...payload }, isLoading: false };

    case LOADING_USER:
      return { ...state, isLoading: true };

    case CLEAR_ERROR_MESSAGE:
      return { ...state, error: '' };

    case SIGN_OUT:
      return { ...initialState };

    default:
      return state;
  }
};

export default authReducer;
