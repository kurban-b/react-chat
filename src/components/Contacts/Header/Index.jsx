import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../../redux/ducks/contacts';
import styles from '../contacts.module.css';
import Reset from './Reset';

function Search() {
  const filter = useSelector((state) => state.contacts.filter);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={styles['search-block']}>
      <input
        type="text"
        value={filter}
        onChange={(e) => handleChange(e)}
        className={styles.input}
        placeholder="Search"
      />
      {filter.length === 0 ? false : <Reset />}
    </div>
  );
}

export default Search;
