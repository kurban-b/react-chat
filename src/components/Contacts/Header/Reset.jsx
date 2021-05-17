import React from 'react';
import styles from '../contacts.module.css';
import { setFilter } from '../../../redux/ducks/contacts';
import { useDispatch } from 'react-redux';

function Reset() {
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(setFilter(''));
  };

  return (
    <button className={styles.reset} onClick={handleReset}>
      <span className="material-icons">clear</span>
    </button>
  );
}

export default Reset;
