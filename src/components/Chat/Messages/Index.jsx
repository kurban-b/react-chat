import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message';
import styles from '../chat.module.css';
import { useParams } from 'react-router-dom';
import { loadMessages } from '../../../redux/ducks/messages';

function Messages() {
  const messages = useSelector((state) => state.messages.messages);
  const profile = useSelector((state) => state.application.items);
  const params = useParams().id;
  const dispatch = useDispatch();
  const filterFromSearch = useSelector((state) => state.messages.filter);



  //Фильтрация сообщений по поиску
  const filtered = messages.filter(
    (message) => message.content.indexOf(
      filterFromSearch === undefined ? '' : filterFromSearch) > -1,
    );


  //Подгурзка нужных сообщений
  useEffect(() => {
    dispatch(loadMessages(params));
  }, [dispatch, params]);
  return (
    <div className={styles.messages}>
      {filtered.map((message, index) => {
        return (
          <Message message={message} profileId={profile._id} key={index} />
        );
      })}
    </div>
  );
}

export default Messages;
