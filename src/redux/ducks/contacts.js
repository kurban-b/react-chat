const initialState = {};

export default function contacts(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

// тут экшн креэйторы

// тут санки

export const loadContacts = () => {
  return (dispatch) => {
    dispatch({
      type: 'contacts/load/start',
    });

    fetch('https://api.intocode.ru:8001/api/contacts')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'contacts/load.success',
          payload: json,
        });
      });
  };
};
