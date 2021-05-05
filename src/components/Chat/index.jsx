import React, { useEffect } from 'react';
import styles from './chat.module.css';
import { useDispatch } from 'react-redux';
import { loadMessages } from '../../redux/ducks/messages';
import SearchMessages from './SearchMessages';
import Messages from './Messages';

function Chat() {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(loadMessages())
  },[])

  return (
    <div className={styles.container}>
      <SearchMessages />
      <Messages />
    </div>
  );
}

export default Chat;
