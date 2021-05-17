import React from 'react';
import styles from './chat.module.css';
import Messages from './Messages/Index';
import ChatHeader from './Header/Index';
import InputForMessage from './InputForMessage/Index';
import { useSelector } from 'react-redux';

function Chat() {
  const darkTheme = useSelector((state) => state.application.darkTheme);

  return (
    <div className={darkTheme ? styles.container_dark : styles.container}>
          <ChatHeader />
          <Messages />
          <InputForMessage />
    </div>
  );
}

export default Chat;
