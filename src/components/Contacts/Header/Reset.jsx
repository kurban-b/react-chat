import React from 'react';
import styles from '../contacts.module.css';
import { setFilter } from '../../../redux/ducks/contacts';
import { useDispatch } from 'react-redux';

function Reset(props) {
  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(setFilter(''));
  };
  return (
    <button className={styles.reset} onClick={handleReset}>
      х
    </button>
  );
}

export default Reset;
