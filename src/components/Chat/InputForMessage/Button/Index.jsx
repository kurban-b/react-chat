import React from 'react';
import styles from './button.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addingMassage } from '../../../../redux/ducks/messages';

function ButtonAddMessage({ content, idContact, setTextMessage }) {
  const dispatch = useDispatch();
  const profileId = useSelector((state) => state.application.items._id);

  const handleAddingMassage = (myId, contactId, type, message) => {
    dispatch(addingMassage(myId, contactId, type, message));
    setTextMessage('');
  };

  return (
    <button
      className={styles.btn}
      onClick={() => {
        handleAddingMassage(profileId, idContact, 'text', content);
      }}
    >
      {content === '' ? (
        <span className="material-icons">mic</span>
      ) : (
        <span className="material-icons">send</span>
      )}
    </button>
  );
}

ButtonAddMessage.propTypes = {
  content: PropTypes.string,
  idContact: PropTypes.string,
  setTextMessage: PropTypes.func,
};

export default ButtonAddMessage;
