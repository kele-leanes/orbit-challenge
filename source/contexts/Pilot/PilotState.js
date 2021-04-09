import React, { useContext, useReducer } from 'react';
import { PilotContext } from './PilotContext';
import PilotReducer from './PilotReducer';

export const usePilot = () => {
  const { state, dispatch } = useContext(PilotContext);
  return [state, dispatch];
};

export const PilotState = ({ children }) => {
  const initialState = {
    pilots: [],
    pilot: {},
    loading: true,
    error: false,
    message: '',
    ships: [],
    movies: [],
    nextPage: true,
  };

  const [state, dispatch] = useReducer(PilotReducer, initialState);

  return (
    <PilotContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}>
      {children}
    </PilotContext.Provider>
  );
};
