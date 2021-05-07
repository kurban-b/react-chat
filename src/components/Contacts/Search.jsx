import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/ducks/contacts';
import styles from './contacts.module.css';
function Search(props) {
  const filter = useSelector((state) => state.contacts.filter);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleReset = () => {
    dispatch(setFilter(''));
  };

  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => handleChange(e)}
        className={styles.input}
      />
      <button className={styles.reset} onClick={handleReset}>
        Х
      </button>
    </div>
  );
}

export default Search;
