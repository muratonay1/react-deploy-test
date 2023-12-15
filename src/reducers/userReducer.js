// reducers/userReducer.js
const initialState = {
  isAuthenticated: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        isAuthenticated: true,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};

export default userReducer;
