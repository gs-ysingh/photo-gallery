import * as actions from '../store/actions';

export const likeImage = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.LIKE_IMAGE });
  }
};

export const unLikeImage = () => {
  return (dispatch, getState) => {
    dispatch({ type: actions.UNLIKE_IMAGE });
  }
};

export const setCurrentImage = (id) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.SET_CURRENT_IMAGE, data: id });
  }
};
