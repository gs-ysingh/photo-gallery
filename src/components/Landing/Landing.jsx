import React from "react";
import { connect } from 'react-redux';
import Header from "../../components/Header/Header.jsx";
import { setCurrentImage } from '../../libs/likeImage';
import styles from './Landing.module.css';

export const Landing = (props) => {

  const ProfilePic = () => {
    return (
      <div className={styles.profilePic}>
        <div className={styles.image} style={{backgroundImage: `url(${props.data.profilePic})`}} />
        <div className={styles.otherContent}>
          <h1>{props.data.userName}</h1>
          <div className={styles.following}>Following</div>
        </div>
      </div>
    )
  }

  const FollowedBy = () => {
    return (
      <div className={styles.followedBy}>
        <h5>{props.data.fullName}</h5>
        <div><span className={styles.followedText}>Followed by</span> {props.data.followedBy.join(', ')} <span className={styles.followedText}>+ more</span></div>
        <div className={styles.numbersContainer}>
          <div>{props.data.posts}</div>
          <div>{props.data.followers}</div>
          <div>{props.data.following}</div>
          <div>posts</div>
          <div>followers</div>
          <div>following</div>
        </div>
      </div>
    )
  }

  const Images = () => {
    return (
      <div className={styles.images}>
        {props.data.images.map((item, index) => {
          return <div onClick={(e) => {
            props.setCurrentImage(e.target.getAttribute('data-id'));
            props.history.push(`/posts/${e.target.getAttribute('data-id')}`);
          }} key={index} data-id={item.id} className={styles.image} style={{backgroundImage: `url(${item.image})`}} />
        })}
      </div>
    )
  }

  return (
    <div>
      <Header content={props.data.userName} />
      <ProfilePic />
      <FollowedBy />
      <Images />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
}

export const mapDispatchToProps = dispatch => ({
  setCurrentImage(str) {
    dispatch(setCurrentImage(str));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);