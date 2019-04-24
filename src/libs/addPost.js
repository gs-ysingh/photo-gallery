import * as actions from '../store/actions';

const addPost = (post) => {
  return (dispatch, getState) => {
    dispatch({ type: actions.ADD_POST, data: post });
  }
};

export default addPost;