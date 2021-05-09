import React from 'react';
import styles from '../chat.module.css';
import { useDispatch } from 'react-redux';
import { closeApplication, openApplication } from '../../../redux/ducks/application';

function Toggle() {
  const dispatch = useDispatch();
  const handleClick = () => {
  dispatch(openApplication())
  }

  return (
    <div className={styles.toggle__block} onClick={handleClick}>
      <button className="material-icons" >settings</button>
    </div>
  );
}

export default Toggle;
