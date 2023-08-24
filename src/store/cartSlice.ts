import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { STATUS } from "../utils/status";

const fetchFromLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart")!);
  } else {
    return [];
  }
};

const storeInLocalStorage = (data: any) => {
  localStorage.setItem("cart", JSON.stringify(data));
};

const initialState = {
  carts: fetchFromLocalStorage(),
  //   cartsStatus: STATUS.IDLE,
  itemsCount: 0,
  totalAmount: 0,
  isCartMessageOn: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state: any, action: any) => {
      console.log(state, action);
      const isItemInCart = state.carts.find((item: any) => {
        return item.id === action.payload.id;
      });
      if (isItemInCart) {
        const tempCart = state.carts.map((item: any) => {
          console.log(item);
          if (item.id === action.payload.id) {
            let tempQty = item.quantity + action.payload.quantity;
            let tempTotalPrice = tempQty * item.price;
            return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
          } else {
            return item;
          }
        });
        state.carts = tempCart;
        storeInLocalStorage(state.carts);
      } else {
        state.carts.push(action.payload);
        storeInLocalStorage(state.carts);
      }
    },
    setCartMessageOn: (state) => {
      state.isCartMessageOn = true;
    },
    setCartMessageOff: (state) => {
      state.isCartMessageOn = false;
    },
    removeFromCart: (state, action) => {
      const tempCart = state.carts.filter(
        (item: any) => item.id === action.payload
      );
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
    clearCart: (state) => {
      state.carts = [];
      storeInLocalStorage(state.carts);
    },
    getCartTotal: (state) => {
      state.totalAmount = state.carts.reduce(
        (cartTotal: any, cartItem: any) => {
          return (cartTotal += cartItem.totalPrice);
        },
        0
      );
      state.itemsCount = state.carts.length;
    },
    toggleCartQty: (state, action) => {
      const tempCart = state.carts.map((item: any) => {
        if (item.id === action.payload.id) {
          let tempQty = item.quantity;
          let tempTotalPrice = item.totalPrice;

          if (action.payload.type === "INC") {
            tempQty++;
            if (tempQty === item.stock) {
              tempQty = item.stock;
            }
            tempTotalPrice = tempQty * item.discountedPrice;
          }
          if (action.payload.type === "DEC") {
            tempQty--;
            if (tempQty < 1) {
              tempQty = 1;
            }
            tempTotalPrice = tempQty * item.discountedPrice;
          }
          return { ...item, quantity: tempQty, totalPrice: tempTotalPrice };
        } else {
          return item;
        }
      });
      state.carts = tempCart;
      storeInLocalStorage(state.carts);
    },
  },
});
export const {
  addToCart,
  setCartMessageOn,
  setCartMessageOff,
  removeFromCart,
  clearCart,
  getCartTotal,
  toggleCartQty,
} = cartSlice.actions;
export const getAllCarts = (state: any) => state.cart.carts;
export const getCartItemsCount = (state: any) => state.cart.itemsCount;
export const getCartMessageStatus = (state: any) => state.cart.isCartMessageOn;
export default cartSlice.reducer;
