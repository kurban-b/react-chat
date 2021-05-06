import React from 'react';
import styles from './chat.module.css'

function SearchMessage () {
  return (
    <div className={styles.header_search__block}>
      <button className='material-icons'>
          search
      </button>
      <input type='text' />
    </div>
  );
}

export default SearchMessage;