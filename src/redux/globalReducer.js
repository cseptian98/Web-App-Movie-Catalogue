import actionType from './globalActionType';

const globalState = {
  list_movies: 0,
};

const rootReducer = (state = globalState, action) => {
  if (action.type === actionType.ADD_MOVIES) {
    return {
      ...state,
      list_movies: state.list_movies + 1,
    };
  }
  return state;
};

export default rootReducer;
