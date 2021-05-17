import React from 'react';
import styles from '../chat.module.css';
import PropTypes from 'prop-types';
import { removingMessage } from '../../../redux/ducks/messages';
import { useDispatch } from 'react-redux';

function MessageDropdown({ id }) {
  const dispatch = useDispatch();

  const handleDeleteMassage = (id) => {
    dispatch(removingMessage(id));
  };

  return (
    <ul>
      <li>
        <span className="material-icons">expand_more</span>
      </li>
      <li
        className={styles.dropdownBtn}
        onClick={() => {
          handleDeleteMassage(id);
        }}
      >
        <i className="fas fa-trash-alt" />
      </li>
    </ul>
  );
}

MessageDropdown.propTypes = {
  id: PropTypes.string.isRequired,
};

export default MessageDropdown;
