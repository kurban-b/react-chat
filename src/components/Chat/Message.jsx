import React from 'react';

function Message (props) {
  return (
    <div>
      {props.message.content}
    </div>
  );
}

export default Message;