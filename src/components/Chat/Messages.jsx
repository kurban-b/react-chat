import React from 'react';
import { useSelector } from 'react-redux';
import Message from './Message';

function Messages (props) {
  const messages = useSelector(state => state.messages.messages)
  return (
    <div>
      {messages.map(message => {
        return <Message message={message} key={message.id}/>
      })}
    </div>
  );
}

export default Messages;