import React  from 'react';
import MainContent from './MainContent';
import styles from './profile.module.css';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

function Profile() {
  const darkTheme = useSelector((state) => state.application.darkTheme);
  const open = useSelector(state => state.application.open);

  if (open === true) {
    return (
      <div className={darkTheme ? styles.container_dark : styles.container}>
        <Route exact path="/contact/:id?">
          <MainContent darkTheme={darkTheme} />
        </Route>
      </div>
    );
  } else {return true}

}

export default Profile;