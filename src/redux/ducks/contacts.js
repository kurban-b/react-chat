const initialState = {
  contacts: [],
  loading: false,
  filter: '',
};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    case 'contacts/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'contacts/load/success':
      return {
        ...state,
        contacts: action.payload,
        loading: false,
      };

    case 'filter/text':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
}

export const loadContacts = () => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });

    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'contacts/load/success',
          payload: json,
        });
      });
  };
};

export const setFilter = (e) => {
  return {
    type: 'filter/text',
    payload: e,
  };
};
