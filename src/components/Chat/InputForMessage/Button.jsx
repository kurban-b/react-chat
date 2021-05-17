import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addingMassage } from '../../../redux/ducks/messages';
import { CSSTransition } from 'react-transition-group';
import { useHotkeys } from 'react-hotkeys-hook';

function ButtonAddMessage({ content, idContact, setTextMessage }) {
  const dispatch = useDispatch();

  const profileId = useSelector((state) => state.application.items._id);

  const stateBTN = content === '';

  const loadingAddMessage = useSelector(
    (state) => state.messages.loadingMessage,
  );

  const handleAddingMassage = (myId, contactId, type, message) => {
    if (message === '') {
      return;
    }
    dispatch(addingMassage(myId, contactId, type, message));
    setTextMessage('');
  };

  useHotkeys(
    'enter',
    () => {
      handleAddingMassage(profileId, idContact, 'text', content);
    },
    { enableOnTags: ['INPUT'] },
  );

  return (
    <CSSTransition in={stateBTN} className="input-btn" timeout={100}>
      {stateBTN ? (
        <button disabled={loadingAddMessage}>
          <span className="material-icons">mic</span>
        </button>
      ) : (
        <button
          disabled={loadingAddMessage}
          onClick={() => {
            handleAddingMassage(profileId, idContact, 'text', content);
          }}
        >
          <span className="material-icons">send</span>
        </button>
      )}
    </CSSTransition>
  );
}

ButtonAddMessage.propTypes = {
  content: PropTypes.string.isRequired,
  idContact: PropTypes.string.isRequired,
  setTextMessage: PropTypes.func.isRequired,
};

export default ButtonAddMessage;
