import React from 'react';
import styles from '../profile.module.css';

function UserName (props) {
  return (
    <div>
      <div>Social</div>
      <div className={props.darkTheme ? styles.socialBlock_dark : styles.socialBlock}>
        <div className={styles.media}>
          <div className={styles.mediaImages}>
            <i className="fab fa-instagram"></i>
          </div>
          <div className={styles.mediaUsername}>{props.contact.username}</div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaImages}>
            <i className="fab fa-twitter"></i>
          </div>
          <div className={styles.mediaUsername}>{props.contact.username}</div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaImages}>
            <i className="fab fa-facebook-square"></i>
          </div>
          <div className={styles.mediaUsername}>{props.contact.username}</div>
        </div>
      </div>
    </div>
  );
}

export default UserName;