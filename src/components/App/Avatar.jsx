import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Avatar({ size, online }) {
  const id = useSelector((state) => state.messages.activeContactId);
  const contacts = useSelector(state => state.contacts.contacts);
  const filteredContact = contacts.find(contact => contact._id === id);
  return (
    <div className={`Avatar ${size}`}>
      <p className={online ? 'online' : ''} />
      <p> {filteredContact !== undefined ? filteredContact.fullname.substr(0, 1) : null} </p>
    </div>
  );
}

Avatar.propTypes = {
  online: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Avatar;
