import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import styles from './chat.module.css';
import { useParams } from 'react-router-dom';
import { loadMessages } from '../../redux/ducks/messages';

function Messages(props) {
  const messages = useSelector((state) => state.messages.messages);
  const params = useParams().id;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMessages(params));
  }, [params]);
  if (params)
    return (
      <div className={styles.messages}>
        {messages.map((message) => {
          return <Message message={message} key={message.id} />;
        })}
      </div>
    );
}

export default Messages;
