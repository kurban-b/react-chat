import React from 'react';
import styles from './chat.module.css';
import Messages from './Messages/Index';
import ChatHeader from './Header/Index';
import InputForMessage from './InputForMessage/Index';
import { Route } from 'react-router-dom';

function Chat() {
  return (
    <div className={styles.container}>
      <Route exact path="/contact/:id?">
        <ChatHeader />
        <Messages />
        <InputForMessage />
      </Route>
    </div>
  );
}

export default Chat;
