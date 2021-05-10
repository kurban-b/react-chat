import React, { useEffect } from 'react';
import MainContent from './MainContent';
import styles from './profile.module.css';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

function Profile(props) {
  const darkTheme = useSelector((state) => state.application.darkTheme);
<<<<<<< HEAD
  const open = useSelector((state) => state.application.open);
=======
  const open = useSelector(state => state.application.open);
>>>>>>> a2a611bd67bda2e0f91e60b1c48be133274d4371

  if (open === true) {
    return (
      <div
        className={darkTheme && open ? styles.container_dark : styles.container}
      >
        <Route exact path="/contact/:id?">
          <MainContent darkTheme={darkTheme} />
        </Route>
      </div>
    );
  } else {
    return true;
  }
}

export default Profile;
