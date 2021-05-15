import React from 'react';
import styles from './chat.module.css';
import Messages from './Messages/Index';
import ChatHeader from './Header/Index';
import InputForMessage from './InputForMessage/Index';
import { Route, Switch } from 'react-router-dom';
import StartPage from './StartPage';
import { useSelector } from 'react-redux';

function Chat() {
  const darkTheme = useSelector((state) => state.application.darkTheme);
  const messages = useSelector(state => state.messages.messages)
  return (
    <div className={darkTheme ? styles.container_dark : styles.container}>
          <ChatHeader />
          <Messages />
          <InputForMessage />
    </div>
  );
}

export default Chat;
