import React from 'react';
import styles from './App.module.css';
import { PropTypes } from 'prop-types';
function Avatar(props) {
  //Возвращаем нужное количество символов
  const name = props.contacts.fullname.substr(0, 1);
  //Индикатор онлайна
  const online = props.contacts.online;

  return (
    <div className={styles[props.size]}>
      <p className={online ? styles.online : ''}> </p>
      <p>{name}</p>
    </div>
  );
}

Avatar.propTypes = {
  online: PropTypes.bool,
  fullname: PropTypes.object,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}


export default Avatar;