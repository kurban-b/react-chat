import React from 'react';
import PropTypes from 'prop-types';

function Avatar({contact, size, online }) {
  return (
    <div className={`Avatar ${size}`}>
      <p className={online ? 'online' : ''} />
      <p> {contact !== undefined ? contact.fullname.substr(0, 1) : null} </p>
    </div>
  );
}

Avatar.propTypes = {
  contact: PropTypes.object,
  online: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Avatar;
