import React from 'react';
import MessageTime from '../../Chat/Messages/MessageTime';
import { PropTypes } from 'prop-types';

function Time({ message }) {
  const time = message && message.time;

  return <MessageTime date={time} />;
}

Time.propTypes = {
  message: PropTypes.object,
};
export default Time;
