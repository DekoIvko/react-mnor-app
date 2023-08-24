import React from "react";
import shopping_cart from "../../img/shopping_cart.png";
import { formatPrice } from "../../utils/helpers";
import { Link } from "react-router-dom";

import "./CartModal.scss";

const CartModal = ({ carts }: any) => {
  return (
    <div className="cart-modal">
      <h5 className="cart-modal-title">Recemtly added products</h5>
      {carts?.length > 0 ? (
        <div className="cart-modal-list grid">
          {carts?.map((cart: any) => {
            return (
              <div key={cart?.id} className="cart-modal-item grid align-center">
                <div className="cart-modal-item-img">
                  <img src={cart?.thumbnail} className="img-cover" alt="" />
                </div>
                <div className="cart-modal-item-title">{cart?.title}</div>
                <div className="cart-modal-item-price">
                  {formatPrice(cart?.discounetdPrice)}
                </div>
              </div>
            );
          })}
          <div className="text-capitalize view-cart-btn bg-orange fs-15 font-manrope text-center">
            view my shopping cart
          </div>
        </div>
      ) : (
        <div className="flex flex-column align-center cart-modal-empty">
          <img src={shopping_cart} alt="" />
          <h6 className="text-dark">No products yet</h6>
        </div>
      )}
    </div>
  );
};

export default CartModal;
