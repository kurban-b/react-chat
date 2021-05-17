import React from 'react';
import styles from './chat.module.css';
import Messages from './Messages/Index';
import ChatHeader from './Header/Index';
import InputForMessage from './InputForMessage/Index';

function Chat() {
  return (
    <div className={styles.container}>
      <ChatHeader />
      <Messages />
      <InputForMessage />
    </div>
  );
}

export default Chat;
