import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import styles from '../chat.module.css';
import { useParams } from 'react-router-dom';
import { loadMessages } from '../../../redux/ducks/messages';

function Messages() {
  const filterFromSearch = useSelector((state) => state.messages.filter);

  const messages = useSelector((state) => {
    return state.messages.messages.filter(
      (message) =>
        message.content.toUpperCase().indexOf(filterFromSearch.toUpperCase()) >
        -1,
    );
  });

  const profile = useSelector((state) => state.application.items);

  const id = useParams().id;

  const dispatch = useDispatch();

  //Подгурзка нужных сообщений
  useEffect(() => {
    dispatch(loadMessages(id));
  }, [dispatch, id]);

  return (
    <div className={styles.messages} id="messages-block">
      {messages.map((message, index) => {
        return (
          <Message message={message} profileId={profile._id} key={index} />
        );
      })}
    </div>
  );
}

export default Messages;
