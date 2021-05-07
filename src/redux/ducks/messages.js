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

// тут санки

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

export const addingMassage = (myId, contactId, type, content) => {
  return (dispatch) => {
    dispatch({
      type: 'messages/adding/start',
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
