import React from 'react';
import styles from './contacts.module.css';
function Avatar(props) {
  //Возвращаем нужное количество символов
  const name = props.conacts.fullname.substr(0, 1);
  //Индикатор онлайна
  const online = props.conacts.online;

  return (
    <div className={styles.avatar}>
      <p className={online ? styles.online : ''}> </p>
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
