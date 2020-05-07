import { INCREASE, DECREASE, SHOWVIEW } from './types';

export const counterIncrease = () => {
  return {
    type: INCREASE,
  };
};
export const counterDecrease = () => {
  return {
    type: DECREASE,
  };
};
export const handleShowView = () => {
  return {
    type: SHOWVIEW,
  };
};
