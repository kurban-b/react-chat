import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addingMassage } from '../../../redux/ducks/messages';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function ButtonAddMessage({ content, idContact, setTextMessage }) {
  const dispatch = useDispatch();
  const profileId = useSelector((state) => state.application.items._id);
  const stateBTN = content === '';
  const loadingAddMessage = useSelector(
    (state) => state.messages.loadingMessage,
  );

  const handleAddingMassage = (myId, contactId, type, message) => {
    dispatch(addingMassage(myId, contactId, type, message));
    setTextMessage('');
  };

  return (
    <TransitionGroup>
      <CSSTransition in={stateBTN} className="input_btn" timeout={100}>
        {stateBTN ? (
          <button>
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
    </TransitionGroup>
  );
}

ButtonAddMessage.propTypes = {
  content: PropTypes.string,
  idContact: PropTypes.string,
  setTextMessage: PropTypes.func,
};

export default ButtonAddMessage;
