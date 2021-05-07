import React from 'react';
import styles from '../chat.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../../redux/ducks/application';

function ToogleTheme () {
  const dispatch = useDispatch();
  const darkTheme = useSelector(state => state.application.darkTheme);


  const handleToogleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div className={styles.toggle_theme__block}>
      <button className={`material-icons ${styles.toggle_theme}`} onClick={handleToogleTheme}>
        {darkTheme ? 'brightness_5' : 'brightness_4'}
      </button>
    </div>

  );
}

export default ToogleTheme;