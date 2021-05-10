import React, { useEffect } from 'react';
import styles from './App.module.css';
import Contacts from '../Contacts';
import Chat from '../Chat';
import Profile from '../Profile';
import { loadApplicaton } from '../../redux/ducks/application';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadApplicaton());
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <Contacts />
      <div className={styles.chat_profile_block}>
        <Chat />
        <Profile />
      </div>
    </div>
  );
}

export default App;
