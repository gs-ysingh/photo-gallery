import React from "react";
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import Header from "../../components/Header/Header.jsx";
import { likeImage, unLikeImage } from '../../libs/likeImage';
import styles from './Posts.module.css';

export const Posts = (props) => {
  const { match: { params } } = props;

  let cx = classNames.bind(styles);
  let unLikedClassName = cx({
    liked: true,
    none: !props.likeState
  });
  let likedClassName = cx({
    like: true,
    none: props.likeState
  });
  return (
    <div className={styles.posts}>
      <Header content='Posts' />
      <div className={styles.image} style={{backgroundImage: `url(${props.image})`}} />
      <div className={styles.likeContainer}>
        <span onClick={(e) => {
          props.likeImage();
        }} className = {likedClassName} />
        <span className = {unLikedClassName} onClick={(e) => {
          props.unLikeImage();
        }} />
        <span className={styles.comment} />
        <span className={styles.share} />
      </div>
      <div className={styles.likedMsg}>
        Liked by {props.likedBy && props.likedBy[0]} and {props.likedBy && props.likedBy.length - 1} others
      </div>
      <div className={styles.viewall}
        onClick={(e) => { props.history.push(`/comments/${props.id}`); }}>
        View all {props.comments.length} comments
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    likedBy: state.likedBy,
    comments: state.comments,
    image: state.image,
    id: state.id,
    likeState: state.likeState
  };
}

export const mapDispatchToProps = dispatch => ({
  likeImage() {
    dispatch(likeImage());
  },
  unLikeImage() {
    dispatch(unLikeImage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);