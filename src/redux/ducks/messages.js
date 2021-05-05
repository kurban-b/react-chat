const initialState = {
  messages: [],
  loading: false,
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
      };
    default:
      return state;
  }
}

// тут экшн креэйторы

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
        });
      });
  };
};
