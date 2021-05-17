const initialState = {
  items: [],
  loading: true,
  darkTheme: JSON.parse(localStorage.getItem('darkTheme')),
  open: false,
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
    case 'application/darkTheme/toogle':
      localStorage.setItem('darkTheme', !state.darkTheme);
      return {
        ...state,
        darkTheme: !state.darkTheme,
      };
    case 'application/open':
      return {
        ...state,
        open: !state.open,
      };
    default:
      return state;
  }
}

export const toggleTheme = () => {
  return {
    type: 'application/darkTheme/toogle',
  };
};

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

export const openApplication = () => {
  return {
    type: 'application/open',
  };
};
