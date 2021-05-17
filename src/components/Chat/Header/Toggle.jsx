import React, { useState } from 'react';
import styles from '../chat.module.css';
import { useDispatch } from 'react-redux';
import { openApplication } from '../../../redux/ducks/application';
import { CSSTransition } from 'react-transition-group';
import { useHotkeys } from 'react-hotkeys-hook';

function Toggle() {
  const [toogle, setToggle] = useState(false);

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(openApplication());
    setToggle(!toogle);
  };

  useHotkeys('shift+p', () => {
    dispatch(openApplication());
    setToggle(!toogle);
  });

  return (
    <CSSTransition
      in={toogle}
      timeout={200}
      classNames={{
        enterActive: 'toggle-active-enter',
        exitActive: 'toggle-active-exit',
      }}
    >
      <div className={styles['toggle-block']} onClick={handleClick}>
        <button className="material-icons">settings</button>
      </div>
    </CSSTransition>
  );
}

export default Toggle;
