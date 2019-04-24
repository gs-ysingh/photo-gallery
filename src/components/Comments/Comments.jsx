import React from "react";
import { connect } from 'react-redux';
import Header from "../../components/Header/Header.jsx";
import addPost from '../../libs/addPost';
import styles from './Comments.module.css';

export const Comments = (props) => {
  const { match: { params } } = props;
  return (
    <div>
      <Header content='Comments' />
      <div className={styles.comments}>
        <input id="commentBox" className={styles.typeText} type="text" />
        <span onClick={() => {
          const value = document.getElementById('commentBox').value;
          if(value) {
            const post = {
              id: params.id,
              comment: {
                by: props.data.userName,
                comment: value,
                time: 'now',
                likes: '0',
                image: props.data.profilePic,
              }
            };
            props.addPost(post);
          }
        }} className={styles.postbtn}>Post</span>
      </div>
      <div>
        {props.comments.map((obj, index) => {
          return <div className={styles.commentContainer} key={index}><div className={styles.image} style={{backgroundImage: `url(${obj.image})`}} /><div className={styles.comment}>{obj.comment}</div></div>
        })}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
    comments: state.comments,
  };
}

export const mapDispatchToProps = dispatch => ({
  addPost(str) {
    dispatch(addPost(str));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);