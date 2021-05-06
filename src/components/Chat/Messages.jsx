import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import styles from './chat.module.css';
import { useParams } from 'react-router-dom';
import { loadMessages } from '../../redux/ducks/messages';

function Messages() {
  const messages = useSelector((state) => state.messages.messages);
  const profile = useSelector(state => state.application.items)
  const params = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessages(params));
  }, [dispatch, params]);

  return (
    <div className={styles.messages}>
      {messages.map((message, i) => {
        return <Message message={message} key={i} profile={profile}/>;
      })}
    </div>
  );
}

export default Messages;
