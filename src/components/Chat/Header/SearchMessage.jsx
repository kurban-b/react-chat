import React, { useState } from 'react';
import styles from '../chat.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterMessage } from '../../../redux/ducks/messages';

function SearchMessage() {
  const dispatch = useDispatch();
  const [isSearchIsActive, setIsSearchIsActive] = useState(false);
  const filter = useSelector((state) => state.messages.filter);

  const handleSearch = (e) => {
    dispatch(setFilterMessage(e.target.value));
  };

  const handleToggleStateActive = () => {
    setIsSearchIsActive(!isSearchIsActive);
  };

  return (
    <div className={styles.header_search__block}>
      <button className="material-icons" onClick={handleToggleStateActive}>
        search
      </button>
      {isSearchIsActive ? (
        <input
          type="text"
          placeholder="поиск"
          value={filter}
          onChange={handleSearch}
        />
      ) : (
        ''
      )}
    </div>
  );
}

export default SearchMessage;
