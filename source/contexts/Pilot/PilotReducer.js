export default (state, action) => {
  switch (action.type) {
    case 'SET_PILOTS':
      return {
        ...state,
        pilots: [...state.pilots, ...action.payload.pilots],
        loading: false,
        nextPage: action.payload.nextPage,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_PILOT':
      return {
        ...state,
        pilot: action.payload,
        loading: false,
      };
    case 'SET_SHIPS':
      return {
        ...state,
        ships: action.payload
          ? state.ships.some(ship => ship.name === action.payload.name)
            ? state.ships
            : [...state.ships, action.payload]
          : [],
      };
    case 'SET_MOVIES':
      return {
        ...state,
        movies: action.payload
          ? state.movies.some(movie => movie.title === action.payload.title)
            ? state.movies
            : [...state.movies, action.payload]
          : [],
      };
    default:
      return state;
  }
};
