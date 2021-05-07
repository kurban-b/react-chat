import React from 'react';
import styles from '../chat.module.css';

function Toggle() {
  return (
    <div className={styles.toggle__block}>
      <button className="material-icons">settings</button>
    </div>
  );
}

export default Toggle;
