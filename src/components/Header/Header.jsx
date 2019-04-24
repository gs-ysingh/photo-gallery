import React from "react";
import { connect } from 'react-redux';
import styles from './Header.module.css';

export const Header = (props) => {
  return (
    <div className={styles.heading}>
      <h1>{props.content}</h1>
    </div>
  )
}

export default Header;