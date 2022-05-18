import React, { useReducer } from "react";
import CartContext from "./cart-context";

const cartFromStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const cartTAFromStorage = localStorage.getItem("totalAmount")
  ? JSON.parse(localStorage.getItem("totalAmount"))
  : 0;

const storeCartItems = (items) => {
  const cart = items.length > 0 ? items : [];
  localStorage.setItem("cart", JSON.stringify(cart));
};

const defaultCartState = {
  items: cartFromStorage,
  totalAmount: cartTAFromStorage,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    // const updatedItems = state.items.concat(action.item);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItemsCart;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItemsCart = [...state.items];
      updatedItemsCart[existingCartItemIndex] = updatedItem;
    } else {
      updatedItemsCart = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    storeCartItems(updatedItemsCart);
    localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));
    return {
      items: updatedItemsCart,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    storeCartItems(updatedItems);
    localStorage.setItem("totalAmount", JSON.stringify(updatedTotalAmount));
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === "CLEAR_ITEM") {
    localStorage.removeItem("cart");
    localStorage.removeItem("totalAmount");
    return defaultCartState;
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    defaultCartState
  );

  // storeCartItems(cartState.items);

  const addItemHandler = (item) => {
    dispatchCartState({ type: "ADD_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM", id: id });
  };

  const clearItemHandler = () => {
    dispatchCartState({ type: "CLEAR_ITEM" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    cartItems: cartState.cartItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    clearItem: clearItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
