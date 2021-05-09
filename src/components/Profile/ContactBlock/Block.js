import React from 'react';
import styles from '../profile.module.css';
import Ava from './Ava.jsx';

function Block (props) {
  return (
    <div>
      <Ava contacts={props.contact} />
      <div className={styles.name}>{props.contact.fullname}</div>
      <div className={styles.username}>@{props.contact.username}</div>
      <div className={styles.icons}>
        <div className={styles.connection}>
          <span className="material-icons">call</span>
        </div>
        <div className={styles.connection}>
          <span className="material-icons">videocam</span>
        </div>
        <div className={styles.connection}>
          <span className="material-icons">email</span>
        </div>
      </div>
    </div>
  );
}

export default Block;