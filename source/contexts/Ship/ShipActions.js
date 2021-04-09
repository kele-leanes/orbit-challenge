import axios from 'axios';
import { BASE_URL } from '../../constants';

export const setLoading = (dispatch, status) =>
  dispatch({ type: 'SET_LOADING', payload: status });

export const setError = (dispatch, error) =>
  dispatch({
    type: 'SET_ERROR',
    payload: { error: error.status, message: error.message },
  });

export const getShips = async (dispatch, payload) => {
  await axios
    .get(BASE_URL + 'starships/?page=' + payload)
    .then(res => {
      const result = res.data;
      dispatch({
        type: 'SET_SHIPS',
        payload: { ships: result.results, nextPage: result.next },
      });
    })
    .catch(error => {
      const result = error.message;
      dispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
          message: result,
        },
      });
    });
};

export const getShip = async (dispatch, payload) => {
  setLoading(dispatch, true);
  await axios
    .get(payload)
    .then(res => {
      const result = res.data;
      dispatch({
        type: 'SET_SHIP',
        payload: result,
      });
      result.pilots.map(url => getPilots(dispatch, url));
      result.films.map(url => getMovies(dispatch, url));
    })
    .catch(error => {
      const result = error.message;
      dispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
          message: result,
        },
      });
    });
};

export const getPilots = async (dispatch, payload) => {
  await axios
    .get(payload)
    .then(res => {
      const result = res.data;
      dispatch({
        type: 'SET_PILOTS',
        payload: result,
      });
    })
    .catch(() => {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
        },
      });
    });
};

export const getMovies = async (dispatch, payload) => {
  await axios
    .get(payload)
    .then(res => {
      const result = res.data;
      dispatch({
        type: 'SET_MOVIES',
        payload: result,
      });
    })
    .catch(() => {
      dispatch({
        type: 'SET_ERROR',
        payload: {
          error: true,
        },
      });
    });
};
