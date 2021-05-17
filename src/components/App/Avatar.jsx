import React from 'react';
import PropTypes from 'prop-types';

function Avatar({fullname, size, online }) {
  return (
    <div className={`Avatar ${size}`}>
      <p className={online ? 'online' : ''} />
      <p> {fullname !== undefined ? fullname.substr(0, 1) : null} </p>
    </div>
  );
}

Avatar.propTypes = {
  fullname: PropTypes.object.isRequired,
  online: PropTypes.bool.isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
};

export default Avatar;