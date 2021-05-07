const initialState = {
  messages: [],
  loading: false,
  filter: '',
};

export default function messages(state = initialState, action) {
  switch (action.type) {
    case 'messages/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'messages/load/success':
      return {
        ...state,
        messages: action.payload,
        activeContactId: action.id,
        loading: false,
      };
    case 'messages/adding/start':
      return {
        ...state,
      };
    case 'messages/adding/success':
      return {
        ...state,
        messages: [...state.messages, action.payload],
      };
    case 'messages/search/filtered':
      return {
        ...state,
        filter: action.payload,
      };
    case 'messages/search/reset':
      return {
        ...state,
        filter: '',
      };
    default:
      return state;
  }
}

// тут экшн креэйторы

export const setFilterMessage = (value) => {
  return {
    type: 'messages/search/filtered',
    payload: value,
  };
};

export const resetFilterMessage = () => {
  return {
    type: 'messages/search/reset',
  };
};

// тут санки

// Санк для подгрузки сообщений
export const loadMessages = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/load/start',
    });

    fetch(
      `https://api.intocode.ru:8001/api/messages/5f2ea3801f986a01cefc8bcd/${id}`,
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'messages/load/success',
          payload: json,
          id: id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// Санк для добавления сообщения
export const addingMassage = (myId, contactId, type, content) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/adding/start',
      payload: { myId, contactId, type, content },
    });
    fetch('https://api.intocode.ru:8001/api/messages', {
      method: 'POST',
      body: JSON.stringify({
        myId: myId,
        contactId: contactId,
        type: type,
        content: content,
      }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'messages/adding/success',
          payload: json,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

// Санк для удаления сообщения
export const removingMessage = (id) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/remove/start',
    });
    fetch(`https://api.intocode.ru:8001/api/messages`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    }).catch((error) => {
      console.error(error);
    });
  };
};
