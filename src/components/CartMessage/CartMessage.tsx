import React from "react";
import correct from "../../img/correct.png";
import "./CartMessage.scss";

const CartMessage = () => {
  return (
    <div className="cart-message text-center">
      <div className="cart-message-icon">
        <img src={correct} alt="" />
      </div>
      <h6 className="text-white">Item has been added in your shopping card</h6>
    </div>
  );
};

export default CartMessage;
