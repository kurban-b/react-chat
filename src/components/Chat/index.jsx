import React, { useEffect } from 'react';
import styles from './chat.module.css';
import { useDispatch } from 'react-redux';
import { loadMessages } from '../../redux/ducks/messages';

function Chat(props) {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(loadMessages())
  },[])

  return <div className={styles.container}>Здесь чат</div>;
}

export default Chat;
