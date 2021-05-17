import React from 'react';
import styles from './profile.module.css';

function Media({ darkTheme }) {
  return (
    <div>
      <div>Media</div>
      <div className={darkTheme ? styles.mediaBlock_dark : styles.mediaBlock}>
        <div className={styles.desktop} />
        <div className={styles.desktopText}>desktop-chat.pdf</div>
      </div>
    </div>
  );
}

export default Media;
