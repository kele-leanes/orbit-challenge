import React, { useContext, useReducer } from 'react';
import { ShipContext } from './ShipContext';
import ShipReducer from './ShipReducer';

export const useShip = () => {
  const { state, dispatch } = useContext(ShipContext);
  return [state, dispatch];
};

export const ShipState = ({ children }) => {
  const initialState = {
    ships: [],
    ship: {},
    loading: true,
    error: false,
    message: '',
    pilots: [],
    movies: [],
    nextPage: true,
  };

  const [state, dispatch] = useReducer(ShipReducer, initialState);

  return (
    <ShipContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}>
      {children}
    </ShipContext.Provider>
  );
};
