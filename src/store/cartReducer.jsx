export const cartReducer = (state, action) => {
  if (action.type === "Add") {
    return {
      ...state,
      cart: [
        ...state.cart,
        {
          ...action.payload,
          qty: 1,
        },
      ],
    };
  }

  if (action.type === "Delete") {
    return {
      ...state,
      cart: state.cart.filter((c) => c.id !== action.payload.id),
    };
  }

  return state;
};
