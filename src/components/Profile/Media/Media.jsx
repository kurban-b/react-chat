import React from 'react';
import styles from '../profile.module.css';

function Media (props) {
  return (
    <div>
      <div>Media</div>
      <div className={props.darkTheme ? styles.mediaBlock_dark : styles.mediaBlock}>
        <div className={styles.desktop}></div>
        <div className={styles.desktopText}>desktop-chat.pdf</div>
      </div>
    </div>
  );
}

export default Media;