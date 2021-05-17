import React, { useState } from 'react';
import styles from '../chat.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  resetFilterMessage,
  setFilterMessage,
} from '../../../redux/ducks/messages';
import { CSSTransition } from 'react-transition-group';

function SearchMessage() {
  const dispatch = useDispatch();

  const [isSearchIsActive, setIsSearchIsActive] = useState(false);

  const filter = useSelector((state) => state.messages.filter);

  const handleSearch = (e) => {
    dispatch(setFilterMessage(e.target.value));
  };

  const handleResetSearch = () => {
    dispatch(resetFilterMessage());
  };

  const handleToggleStateActive = () => {
    setIsSearchIsActive(!isSearchIsActive);
  };

  return (
    <div className={styles['header-search-block']}>
      <CSSTransition
        in={isSearchIsActive}
        timeout={200}
        classNames={{
          enterActive: 'search-btn-active-enter',
          exitActive: 'search-btn-active-exit',
        }}
      >
        <button className="material-icons" onClick={handleToggleStateActive}>
          search
        </button>
      </CSSTransition>
      {isSearchIsActive ? (
        <>
          <input
            type="text"
            placeholder="поиск"
            value={filter}
            onChange={handleSearch}
          />
          {filter ? (
            <button className="material-icons" onClick={handleResetSearch}>
              clear
            </button>
          ) : (
            ''
          )}
        </>
      ) : (
        ''
      )}
    </div>
  );
}

export default SearchMessage;
