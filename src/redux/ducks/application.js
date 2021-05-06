const initialState = {
  items: [],
  loading: true,
};

export default function application(state = initialState, action) {
  switch (action.type) {
    case 'application/load/start':
      return {
        ...state,
        loading: true,
      };

    case 'application/load/success':
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export const loadApplicaton = () => {
  return (dispatch) => {
    dispatch({
      type: 'application/load/start',
    });

    fetch('https://api.intocode.ru:8001/api/profile')
      .then((response) => response.json())
      .then((json) => {
        dispatch({
          type: 'application/load/success',
          payload: json,
        });
      });
  };
};
