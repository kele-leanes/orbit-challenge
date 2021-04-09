export default (state, action) => {
  switch (action.type) {
    case 'SET_SHIPS':
      return {
        ...state,
        ships: [...state.ships, ...action.payload.ships],
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
    case 'SET_SHIP':
      return {
        ...state,
        ship: action.payload,
        loading: false,
      };
    case 'SET_PILOTS':
      return {
        ...state,
        pilots: action.payload
          ? state.pilots.some(pilot => pilot.name === action.payload.name)
            ? state.pilots
            : [...state.pilots, action.payload]
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
