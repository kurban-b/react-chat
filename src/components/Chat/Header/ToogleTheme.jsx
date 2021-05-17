import React from 'react';
import styles from '../chat.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../redux/ducks/application';
import { CSSTransition } from 'react-transition-group';

function ToogleTheme() {
  const dispatch = useDispatch();

  const darkTheme = useSelector((state) => state.application.darkTheme);

  const handleToogleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <CSSTransition
      in={darkTheme}
      timeout={200}
      classNames={{
        enterActive: 'toggle-theme-active-enter',
        exitActive: 'toggle-theme-active-exit',
      }}
    >
      <div className={styles['toggle-theme-block']}>
        <button
          className={`material-icons ${styles['toggle-theme']}`}
          onClick={handleToogleTheme}
        >
          {darkTheme ? 'brightness_5' : 'brightness_4'}
        </button>
      </div>
    </CSSTransition>
  );
}

export default ToogleTheme;
