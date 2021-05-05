import React from 'react';
import styles from './chat.module.css';

function Message(props) {
  if (props.message.toUserId === '5f2ea3801f986a01cefc8bcd') {
    return <div className={styles.incoming}>{props.message.content}</div>;
  }
  return <div className={styles.outgoing}>{props.message.content}</div>;
}

export default Message;
