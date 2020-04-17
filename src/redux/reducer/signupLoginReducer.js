const initialState = {
  saving: false,
  logginIn: false,
  firebaseError: null,
  firebaseErrorCode: null,
  token: "",
  userId: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_USER_START":
      return {
        ...state,
        saving: true,
      };
    case "SIGNUP_USER_SUCCESS":
      return {
        ...state,
        saving: false,
        token: action.token,
        userId: action.userId,
      };
    case "SIGNUP_USER_ERROR":
      return {
        ...state,
        saving: false,
        firebaseError: action.error.response.data.error.message,
        firebaseErrorCode: action.error.response.data.error.message,
      };
    case "LOGIN_USER_START":
      return {
        ...state,
        logginIn: true,
      };
    case "LOGIN_USER_SUCCESS":
      return {
        ...state,
        logginIn: false,
        token: action.token,
        userId: action.userId,
      };
    case "LOGIN_USER_ERROR":
      return {
        ...state,
        logginIn: false,
        firebaseError: action.error.response.data.error.message,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        saving: false,
        logginIn: false,
        firebaseError: null,
        firebaseErrorCode: null,
        token: "",
        userId: "",
      };
    default:
      return state;
  }
};

export default reducer;
