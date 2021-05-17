import React from 'react';
import styles from './chat.module.css';

function StartPage() {
  return (
    <div className={styles['start-page']}>
      <h3>Please, select a chat to start messaging</h3>
    </div>
  );
}

export default StartPage;
