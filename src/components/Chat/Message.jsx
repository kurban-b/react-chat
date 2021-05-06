import React, { useState } from 'react';
import styles from './chat.module.css';

function Message(props) {
  if (props.message.toUserId === '5f2ea3801f986a01cefc8bcd') {
    return (
      <div className={styles.incoming} id={props.message.id}>
        <div className={styles.message}>{props.message.content}</div>
        <ul>
          <li className={styles.btn__remove}>
            <span className="material-icons">expand_more</span>
          </li>
          <li className={styles.dropdownBtn}>
            <button className={styles.dropdownBtn__btn}>удалить</button>
          </li>
        </ul>
      </div>
    );
  }
  return (
    <div className={styles.outgoing}>
      <div className={styles.message}>{props.message.content}</div>
      <ul>
        <li className={styles.btn__remove}>
          <span className="material-icons">expand_more</span>
        </li>
        <li className={styles.dropdownBtn}>
          <button className={styles.dropdownBtn__btn}>удалить</button>
        </li>
      </ul>
    </div>
  );
}

export default Message;
