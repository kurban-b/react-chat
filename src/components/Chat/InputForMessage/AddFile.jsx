import React from 'react';
import styles from '../chat.module.css';

function AddFile() {
  return (
    <button className={styles['input-btn']}>
      <span className="material-icons">attach_file</span>
    </button>
  );
}

export default AddFile;
