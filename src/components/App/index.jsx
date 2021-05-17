import React, { useEffect } from 'react';
import styles from './App.module.css';
import Contacts from '../Contacts';
import Chat from '../Chat';
import Profile from '../Profile/Index';
import { loadApplicaton } from '../../redux/ducks/application';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import StartPage from '../Chat/StartPage';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadApplicaton());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <Switch>
        <Route exact path={'/contact/:id?'}>
          <Contacts />
          <div className={styles.chat_profile_block}>
            <Chat />
            <Profile />
          </div>
        </Route>
        <Route>
          <Contacts />
          <StartPage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
