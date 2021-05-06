import React from 'react';
import styles from './button.module.css';
import { useDispatch } from 'react-redux';
import { addingMassage } from '../../../../redux/ducks/messages';

function ButtonAddMessage(props) {
  const dispatch = useDispatch();

  const handleAddingMassage = (myId, contactId, type, message) => {
    dispatch(addingMassage(myId, contactId, type, message));
    props.setTextMessage('')
  };
  return (
    <button
      className={styles.btn}
      onClick={() => {
        handleAddingMassage('', props.idContact, 'text', props.content);
      }}
    >
      {
        props.content === '' ?
          <span className="material-icons">mic</span>
          :
          <span className="material-icons">send</span>
      }
    </button>
  );
}

export default ButtonAddMessage;
