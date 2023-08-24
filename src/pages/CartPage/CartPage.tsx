import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  getAllCarts,
  removeFromCart,
  toggleCartQty,
} from "../../store/cartSlice";
import { Link } from "react-router-dom";

import "./CartPage.scss";
import { formatPrice } from "../../utils/helpers";

const CartPage = () => {
  const dispatch = useDispatch<any>();
  const carts = useSelector(getAllCarts);
  const { itemsCount, totalAmount }: any = useSelector((state: any) => {
    return state.cart;
  });
  console.log(carts);
  if (carts.length === 0) {
    return (
      <div className="container">
        <div className="empty-cart flex align-center">
          <img src="" alt="" />
          <span className="text-grey fw-6 fs-15">
            Your shopping card is empty!
          </span>
          <Link to="." className="shooping-btn bg-orange">
            Go shopping now
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart bg-whitesmoke">
      <div className="container">
        <div className="cart-ctable">
          <div className="cart-chead bg-white">
            <div className="cart-ctr fw-6 font-manrope fs-15">
              <div className="cart-cth">
                <span className="cart-ctxt">C.N.</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Product</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Unit Price</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Quantity</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Total Price</span>
              </div>
              <div className="cart-cth">
                <span className="cart-ctxt">Actions</span>
              </div>
            </div>
          </div>
          <div className="cart-cbody">
            {carts?.map((cart: any) => {
              return (
                <div className="cart-ctr" key={cart?.id}>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">{cart?.id}</span>
                  </div>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">{cart?.title}</span>
                  </div>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">
                      {formatPrice(cart?.discountedPrice)}
                    </span>
                  </div>
                  <div className="cart-ctd">
                    <div className="qty-change flex align-center">
                      <button
                        className="qty-decrease flex align-center"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "DEC" }))
                        }
                      >
                        <i className="fas fa-minus"></i>
                      </button>
                      <div className="qty-value flex align-center">
                        {cart?.quantity}
                      </div>
                      <button
                        className="qty-decrease flex align-center"
                        onClick={() =>
                          dispatch(toggleCartQty({ id: cart?.id, type: "INC" }))
                        }
                      >
                        <i className="fas fa-plus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-ctd">
                    <span className="cart-ctxt">
                      {formatPrice(cart?.totalPrice)}
                    </span>
                  </div>
                  <div className="cart-ctd">
                    <button
                      className="delete-btn text-dark"
                      onClick={() => dispatch(removeFromCart(cart?.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-cfoot flex align-start py-3 justify-between">
            <div className="cart cfoot-l">
              <button
                className="clear-cart-btn text-uppercase text-danger fs-15"
                onClick={() => dispatch(clearCart())}
              >
                <i className="fas fa-trash "></i>
                <span className="mx-1">Clear cart</span>
              </button>
            </div>
            <div className="cart-cfoot-r flex flex-column justify-end">
              <div className="total-txt flex align-center justify-end">
                <div className="font-manrope fw-5">
                  Total ({itemsCount}) items:
                </div>
                <span className="text-orange fs-22 mx-2 fw-6">
                  {formatPrice(totalAmount)}
                </span>
              </div>
              <button className="checkout-btn fs-16">Check out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
