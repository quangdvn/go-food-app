import {
  LOG_IN_SUCCESS,
  LOG_IN_ERROR,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  CLEAR_ERROR_MESSAGE,
} from '../actions/types';

const initialState = {
  user: {},
  token: null,
  error: '',
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

    case CLEAR_ERROR_MESSAGE:
      return { ...state, error: '' };

    default:
      return state;
  }
};

export default authReducer;
