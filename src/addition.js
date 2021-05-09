export const scrollMessages = () => {
  const messages = document.getElementById('messages-block');
  messages.scrollTop = messages.scrollHeight;
};
