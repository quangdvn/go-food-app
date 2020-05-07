import { INCREASE, DECREASE, SHOWVIEW } from './types';

export const counterIncrease = () => {
  return {
    type: INCREASE,
  };
};
export const counterDecrease = () => ({ type: DECREASE });
export const handleShowView = () => ({ type: SHOWVIEW });
