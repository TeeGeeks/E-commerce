const AuthReducer = (state, action) => {
  if (action.type === "LOGIN") {
    return {
      currentUser: action.payload,
    };
  }

  if (action.type === "LOGOUT") {
    return {
      currentUser: null,
    };
  }

  if (action.type === "REGISTER") {
    return {
      currentUser: null,
    };
  }

  return state;
};

export default AuthReducer;
