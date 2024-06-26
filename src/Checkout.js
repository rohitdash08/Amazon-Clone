import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.webfx.com/wp-content/uploads/2021/10/banner-ad-example-online.png"
        />

        <div>
          <h2 className="checkout__title">Your Shopping basket</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;

Checkout.js;
